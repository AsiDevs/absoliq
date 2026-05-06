"use client";

import { useMemo, useState, useTransition } from "react";
import clsx from "clsx";
import BlogCard from "./blog-card";
import {
  ALL_BLOG_CATEGORY,
  BLOGS_PER_PAGE,
  getBatchForPage,
} from "../lib/blogs";
import AnimateUp from "@/app/components/framer/animate-up";

const BlogsPaginationClient = ({ initialBatch, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialBatch.selectedCategory || ALL_BLOG_CATEGORY,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedBlogs, setLoadedBlogs] = useState(initialBatch.blogs);
  const [loadedBatch, setLoadedBatch] = useState(initialBatch.batchPage);
  const [hasMore, setHasMore] = useState(initialBatch.hasMore);
  const [totalBlogs, setTotalBlogs] = useState(initialBatch.totalBlogs);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  const controlsDisabled = isLoading || isPending;

  const visibleBlogs = useMemo(() => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    const end = start + BLOGS_PER_PAGE;

    return loadedBlogs.slice(start, end);
  }, [currentPage, loadedBlogs]);

  const fetchBatch = async (batchPage, categoryId = selectedCategory) => {
    const params = new URLSearchParams({
      page: String(batchPage),
    });

    if (categoryId && categoryId !== ALL_BLOG_CATEGORY) {
      params.set("category", categoryId);
    }

    const response = await fetch(`/api/blogs?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Unable to load blogs right now.");
    }

    return response.json();
  };

  const ensurePageData = async (page, categoryId = selectedCategory) => {
    const requiredBatch = getBatchForPage(page);

    if (requiredBatch <= loadedBatch) {
      return;
    }

    let nextBlogs = loadedBlogs;
    let nextBatch = loadedBatch;
    let nextHasMore = hasMore;

    while (nextBatch < requiredBatch && nextHasMore) {
      const batch = await fetchBatch(nextBatch + 1, categoryId);

      nextBlogs = [...nextBlogs, ...batch.blogs];
      nextBatch = batch.batchPage;
      nextHasMore = batch.hasMore;
    }

    setLoadedBlogs(nextBlogs);
    setLoadedBatch(nextBatch);
    setHasMore(nextHasMore);
  };

  const handlePageChange = async (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage ||
      controlsDisabled
    ) {
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await ensurePageData(page);
      startTransition(() => {
        setCurrentPage(page);
      });
    } catch (nextError) {
      setError(nextError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = async (categoryId) => {
    if (categoryId === selectedCategory || controlsDisabled) {
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const batch = await fetchBatch(1, categoryId);

      startTransition(() => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
        setLoadedBlogs(batch.blogs);
        setLoadedBatch(batch.batchPage);
        setHasMore(batch.hasMore);
        setTotalBlogs(batch.totalBlogs);
      });
    } catch (nextError) {
      setError(nextError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div>
        <p className="text-body-small text-text-secondary text-center mb-3">
          Choose a category:
        </p>
        <div className="add-gap flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              disabled={controlsDisabled}
              className={clsx(
                "rounded-sm px-2 py-2 text-title-base-blog font-bold transition-timing leading-1",
                {
                  "bg-primary-dark text-primary-white":
                    selectedCategory === category.id,
                  "bg-text-light text-text-secondary":
                    selectedCategory !== category.id,
                  "cursor-not-allowed opacity-60": controlsDisabled,
                  "cursor-pointer": !controlsDisabled,
                },
              )}
            >
              <span className="mt-0.5 block">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {visibleBlogs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleBlogs.map((blog, idx) => (
            <AnimateUp delay={idx * 0.15} key={blog.id}>
              <BlogCard blog={blog} />
            </AnimateUp>
          ))}
        </div>
      ) : (
        <div className="rounded-[18px] border border-border-primary bg-[#FCFCFC] p-6 text-body-small text-text-secondary">
          No blogs found for this category.
        </div>
      )}

      {error && <p className="mt-6 text-body-small text-[#B42318]">{error}</p>}

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || controlsDisabled}
            className={clsx(
              "rounded-[2.6px] border border-border-primary px-4 py-1.25 text-body-small transition-timing",
              {
                "cursor-pointer bg-[#FCFCFC] text-text-heading":
                  currentPage !== 1 && !controlsDisabled,
                "cursor-not-allowed opacity-50":
                  currentPage === 1 || controlsDisabled,
              },
            )}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                disabled={controlsDisabled}
                aria-current={page === currentPage ? "page" : undefined}
                className={clsx(
                  "min-w-8 rounded-[2.6px] border px py-1.25 text-body-small-s transition-timing",
                  {
                    "border-primary-dark bg-primary-dark text-primary-white":
                      page === currentPage,
                    "border-border-primary bg-[#FCFCFC] text-text-heading":
                      page !== currentPage,
                    "cursor-not-allowed opacity-60": controlsDisabled,
                    "cursor-pointer": !controlsDisabled,
                  },
                )}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || controlsDisabled}
            className={clsx(
              "rounded-[2.6px] border border-border-primary px-4 py-1.25 text-body-small transition-timing",
              {
                "cursor-pointer bg-[#FCFCFC] text-text-heading":
                  currentPage !== totalPages && !controlsDisabled,
                "cursor-not-allowed opacity-50":
                  currentPage === totalPages || controlsDisabled,
              },
            )}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsPaginationClient;
