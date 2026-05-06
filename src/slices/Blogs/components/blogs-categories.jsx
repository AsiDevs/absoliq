import { getCategoryButtonClassName } from "../utils/blogs-pagination";

const BlogsCategories = ({
  categories = [],
  controlsDisabled,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div>
      <p className="text-body-small text-text-secondary text-center mb-3">
        Choose a category:
      </p>
      <div className="add-gap flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            disabled={controlsDisabled}
            className={getCategoryButtonClassName(
              selectedCategory === category.id,
              controlsDisabled,
            )}
          >
            <span className="mt-0.5 block">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogsCategories;
