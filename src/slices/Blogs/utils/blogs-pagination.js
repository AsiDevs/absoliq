import clsx from "clsx";
import {
  ALL_BLOG_CATEGORY,
  BLOGS_PER_PAGE,
  getBatchForPage,
} from "../lib/blogs";

export const getErrorMessage = (error) =>
  error instanceof Error ? error.message : "Unable to load blogs right now.";

export const getCategoryButtonClassName = (isSelected, isDisabled) =>
  clsx(
    "rounded-sm px-2 py-2 text-title-base-blog font-bold transition-timing leading-1",
    {
      "bg-primary-dark text-primary-white": isSelected,
      "bg-text-light text-text-secondary": !isSelected,
      "cursor-not-allowed opacity-60": isDisabled,
      "cursor-pointer": !isDisabled,
    },
  );

export const getPaginationButtonClassName = (isActive, isDisabled) =>
  clsx(
    "min-w-8 rounded-[2.6px] border px py-1.25 text-body-small-s transition-timing",
    {
      "bg-primary-dark border-primary-dark text-primary-white": isActive,
      "border-border-primary bg-[#FCFCFC] text-text-heading": !isActive,
      "cursor-not-allowed opacity-60": isDisabled,
      "cursor-pointer": !isDisabled,
    },
  );

export const getNavButtonClassName = (isDisabled) =>
  clsx(
    "rounded-[2.6px] border border-border-primary px-4 py-1.25 text-body-small transition-timing",
    {
      "cursor-pointer bg-[#FCFCFC] text-text-heading": !isDisabled,
      "cursor-not-allowed opacity-50": isDisabled,
    },
  );

export const getVisibleBlogs = (blogs, currentPage) => {
  const start = (currentPage - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;

  return blogs.slice(start, end);
};

export const shouldSkipPageChange = ({
  page,
  totalPages,
  currentPage,
  controlsDisabled,
}) => page < 1 || page > totalPages || page === currentPage || controlsDisabled;

export const shouldSkipCategoryChange = ({
  categoryId,
  selectedCategory,
  controlsDisabled,
}) => categoryId === selectedCategory || controlsDisabled;

export const createBlogsBatchState = (batch) => ({
  currentPage: 1,
  loadedBlogs: batch.blogs,
  loadedBatch: batch.batchPage,
  hasMore: batch.hasMore,
  totalBlogs: batch.totalBlogs,
});

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const requestBlogsBatch = async (
  batchPage,
  categoryId = ALL_BLOG_CATEGORY,
) => {
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

export const loadRequiredBlogsBatch = async ({
  page,
  categoryId,
  loadedBlogs,
  loadedBatch,
  hasMore,
}) => {
  const requiredBatch = getBatchForPage(page);

  if (requiredBatch <= loadedBatch) {
    return {
      loadedBlogs,
      loadedBatch,
      hasMore,
    };
  }

  let nextBlogs = loadedBlogs;
  let nextBatch = loadedBatch;
  let nextHasMore = hasMore;

  while (nextBatch < requiredBatch && nextHasMore) {
    const batch = await requestBlogsBatch(nextBatch + 1, categoryId);

    nextBlogs = [...nextBlogs, ...batch.blogs];
    nextBatch = batch.batchPage;
    nextHasMore = batch.hasMore;
  }

  return {
    loadedBlogs: nextBlogs,
    loadedBatch: nextBatch,
    hasMore: nextHasMore,
  };
};
