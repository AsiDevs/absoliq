import { asText, filter } from "@prismicio/client";
import { createClient } from "@/prismicio";

export const BLOG_FETCH_BATCH_SIZE = 12;
export const BLOGS_PER_PAGE = 6;
export const ALL_BLOG_CATEGORY = "all";

const BLOG_QUERY_FIELDS = [
  "blog.title",
  "blog.excerpt",
  "blog.post_date",
  "blog.image",
  "blog.category",
];

const BLOG_CATEGORY_FETCH_LINKS = ["blog_category.category"];

export const getBatchForPage = (page) =>
  Math.ceil((page * BLOGS_PER_PAGE) / BLOG_FETCH_BATCH_SIZE);

const serializeBlog = (blog) => ({
  id: blog.id,
  uid: blog.uid,
  url: `/blog/${blog.uid}`,
  title: blog.data?.title || "Untitled blog",
  excerpt: asText(blog.data?.excerpt) || "",
  postDate: blog.data?.post_date || blog.first_publication_date,
  category: blog.data?.category?.id
    ? {
        id: blog.data.category.id,
        uid: blog.data.category.uid,
        label: blog.data.category.data?.category || "Uncategorized",
      }
    : null,
  image: blog.data?.image?.url
    ? {
        url: blog.data.image.url,
        alt: blog.data.image.alt || blog.data?.title || "Blog cover image",
        width: blog.data.image.dimensions?.width || 1600,
        height: blog.data.image.dimensions?.height || 1000,
      }
    : null,
});

const normalizeCategory = (category) => ({
  id: category.id,
  uid: category.uid,
  label: category.data?.category || "Uncategorized",
});

export const getBlogCategories = async () => {
  const client = createClient();
  const categories = await client.getAllByType("blog_category", {
    fetch: ["blog_category.category"],
    orderings: [{ field: "my.blog_category.category", direction: "asc" }],
  });

  const uniqueCategories = categories.reduce((acc, category) => {
    const normalizedCategory = normalizeCategory(category);
    const key = normalizedCategory.label.trim().toLowerCase();

    if (!key || acc.some((item) => item.label.trim().toLowerCase() === key)) {
      return acc;
    }

    acc.push(normalizedCategory);
    return acc;
  }, []);

  return [
    { id: ALL_BLOG_CATEGORY, uid: ALL_BLOG_CATEGORY, label: "All" },
    ...uniqueCategories,
  ];
};

export const getBlogsBatch = async (
  page = 1,
  categoryId = ALL_BLOG_CATEGORY,
) => {
  const client = createClient();

  const filters =
    categoryId !== ALL_BLOG_CATEGORY ? [filter.at("my.blog.category", categoryId)] : [];

  const response = await client.getByType("blog", {
    page,
    pageSize: BLOG_FETCH_BATCH_SIZE,
    fetch: BLOG_QUERY_FIELDS,
    fetchLinks: BLOG_CATEGORY_FETCH_LINKS,
    filters,
    orderings: [{ field: "my.blog.post_date", direction: "desc" }],
  });

  return {
    batchPage: response.page,
    hasMore: Boolean(response.next_page),
    totalBlogs: response.total_results_size,
    selectedCategory: categoryId,
    blogs: response.results.map(serializeBlog),
  };
};
