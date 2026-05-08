import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <article className="h-full">
      <Link
        href={blog.url}
        className="relative flex h-full flex-col overflow-hidden rounded-[7.32px] group"
      >
        {blog.image && (
          <div className="h-[514px] md:h-[604px] xl:h-[626px] overflow-hidden transition-bouncy group-hover:scale-[1.05]">
            <Image
              src={blog.image.url}
              alt={blog.image.alt}
              width={blog.image.width}
              height={blog.image.height}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-6 rounded-xl absolute bg-primary-white bottom-4 left-[50%] translate-x-[-50%] w-[90%]">
          {blog.category?.label && (
            <div className="w-fit rounded-[2.67px] bg-primary-dark p-[5.3px] text-body-small-s text-text-light mb-7.5 font-medium">
              {blog.category.label}
            </div>
          )}

          <h3 className="text-title-medium text-text-heading mb-2.5">
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p className="text-body-medium text-text-secondary">
              {blog.excerpt}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
