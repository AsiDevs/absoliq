import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import BlogCard from "../components/blog-card";
import { getRelatedBlogs } from "../lib/blogs";

const VariantTwo = async ({ slice, context }) => {
  const currentUid = context?.currentUid;
  const currentPage = context?.page;
  const currentCategoryId = currentPage?.data?.category?.id;
  const relatedBlogs = await getRelatedBlogs({
    currentUid,
    currentDocumentId: currentPage?.id,
    categoryId: currentCategoryId,
  });

  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} leftAligned />

      {relatedBlogs.length > 0 && (
        <div className="mt-10 flex justify-center">
          <div className="flex w-full flex-wrap justify-center gap-6">
            {relatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledContainer>
  );
};

export default VariantTwo;
