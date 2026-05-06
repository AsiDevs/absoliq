import BlogsPaginationClient from "./blogs-pagination-client";
import { getBlogCategories, getBlogsBatch } from "../lib/blogs";

const BlogsPagination = async () => {
  const [initialBatch, categories] = await Promise.all([
    getBlogsBatch(),
    getBlogCategories(),
  ]);

  return (
    <BlogsPaginationClient
      initialBatch={initialBatch}
      categories={categories}
    />
  );
};

export default BlogsPagination;
