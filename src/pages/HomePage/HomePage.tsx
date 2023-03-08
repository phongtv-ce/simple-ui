import React, { useEffect } from 'react';

import BlogList from 'components/BlogList/BlogList';
import Spinner from 'components/Spinner/Spinner';

import { blogListActions } from 'redux/blogList/slice';
import { blogListFilterActions } from 'redux/blogListFilter/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import BlogListPagination from 'components/BlogListPagination/BlogListPagination';
import FilterBar from 'components/FilterBar/FilterBar';

const HomePage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data: blogList, loading } = useAppSelector((state) => state.blogList);
  const blogListFilter = useAppSelector((state) => state.blogListFilter);

  useEffect(() => {
    dispatch(blogListActions.fetchBlogList(blogListFilter));
  }, [blogListFilter]);

  useEffect(() => {
    dispatch(blogListFilterActions.clearFilter());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FilterBar />
          <BlogList blogList={blogList} />
          <BlogListPagination />
        </>
      )}
    </>
  );
};

export default HomePage;
