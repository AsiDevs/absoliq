import {
  getNavButtonClassName,
  getPaginationButtonClassName,
} from "../utils/blogs-pagination";

const BlogsPaginationList = ({
  controlsDisabled,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || controlsDisabled}
        className={getNavButtonClassName(currentPage === 1 || controlsDisabled)}
      >
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          disabled={controlsDisabled}
          aria-current={page === currentPage ? "page" : undefined}
          className={getPaginationButtonClassName(
            page === currentPage,
            controlsDisabled,
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || controlsDisabled}
        className={getNavButtonClassName(
          currentPage === totalPages || controlsDisabled,
        )}
      >
        Next
      </button>
    </div>
  );
};

export default BlogsPaginationList;
