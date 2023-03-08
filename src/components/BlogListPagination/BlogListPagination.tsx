import React from 'react';
import { blogListFilterActions } from 'redux/blogListFilter/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const BlogListPagination: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page, limit } = useAppSelector((state) => state.blogListFilter);
  const { data: blogList } = useAppSelector((state) => state.blogList);
  return (
    <nav aria-label="Blog navigation">
      <ul className="pagination">
        <li
          className={`page-item ${page <= 1 ? 'disabled' : ''}`}
          onClick={() => dispatch(blogListFilterActions.paginationPrev())}
        >
          <a className="page-link">Previous</a>
        </li>
        {page > 1 && (
          <li
            className="page-item"
            onClick={() =>
              dispatch(blogListFilterActions.changePagination(page - 1))
            }
          >
            <a className="page-link">{page - 1}</a>
          </li>
        )}
        <li className="page-item active">
          <a className="page-link">{page}</a>
        </li>
        {blogList.length >= limit && (
          <li
            className="page-item"
            onClick={() =>
              dispatch(blogListFilterActions.changePagination(page + 1))
            }
          >
            <a className="page-link">{page + 1}</a>
          </li>
        )}
        <li
          className={`page-item ${blogList.length < limit ? 'disabled' : ''}`}
          onClick={() =>
            blogList.length >= limit &&
            dispatch(blogListFilterActions.paginationNext())
          }
        >
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default BlogListPagination;
