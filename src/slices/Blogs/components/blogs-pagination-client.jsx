"use client";

import { useMemo, useState, useTransition } from "react";
import BlogCard from "./blog-card";
import BlogsCategories from "./blogs-categories";
import BlogsPaginationList from "./blogs-pagination-list";
import { ALL_BLOG_CATEGORY, BLOGS_PER_PAGE } from "../lib/blogs";
import AnimateUp from "@/app/components/framer/animate-up";
import {
  createBlogsBatchState,
  getErrorMessage,
  getVisibleBlogs,
  loadRequiredBlogsBatch,
  requestBlogsBatch,
  scrollToTop,
  shouldSkipCategoryChange,
  shouldSkipPageChange,
} from "../utils/blogs-pagination";

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

  const visibleBlogs = useMemo(
    () => getVisibleBlogs(loadedBlogs, currentPage),
    [currentPage, loadedBlogs],
  );

  const runAsyncAction = async (callback) => {
    setError("");
    setIsLoading(true);

    try {
      await callback();
    } catch (nextError) {
      setError(getErrorMessage(nextError));
    } finally {
      setIsLoading(false);
    }
  };

  const applyBatch = (batch) => {
    const nextState = createBlogsBatchState(batch);

    setCurrentPage(nextState.currentPage);
    setLoadedBlogs(nextState.loadedBlogs);
    setLoadedBatch(nextState.loadedBatch);
    setHasMore(nextState.hasMore);
    setTotalBlogs(nextState.totalBlogs);
  };

  const handlePageChange = async (page) => {
    if (
      shouldSkipPageChange({
        page,
        totalPages,
        currentPage,
        controlsDisabled,
      })
    ) {
      return;
    }

    await runAsyncAction(async () => {
      const nextState = await loadRequiredBlogsBatch({
        page,
        categoryId: selectedCategory,
        loadedBlogs,
        loadedBatch,
        hasMore,
      });

      setLoadedBlogs(nextState.loadedBlogs);
      setLoadedBatch(nextState.loadedBatch);
      setHasMore(nextState.hasMore);

      startTransition(() => {
        setCurrentPage(page);
      });
      scrollToTop();
    });
  };

  const handleCategoryChange = async (categoryId) => {
    if (
      shouldSkipCategoryChange({
        categoryId,
        selectedCategory,
        controlsDisabled,
      })
    ) {
      return;
    }

    await runAsyncAction(async () => {
      const batch = await requestBlogsBatch(1, categoryId);

      startTransition(() => {
        setSelectedCategory(categoryId);
        applyBatch(batch);
      });
    });
  };

  return (
    <div className="">
      <BlogsCategories
        categories={categories}
        controlsDisabled={controlsDisabled}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

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

      <BlogsPaginationList
        controlsDisabled={controlsDisabled}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogsPaginationClient;
