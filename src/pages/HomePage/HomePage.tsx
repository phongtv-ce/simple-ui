import React, { useEffect } from 'react';

import BlogList from 'components/BlogList/BlogList';
import Spinner from 'components/Spinner/Spinner';

import { blogListActions } from 'redux/blogList/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import BlogListPagination from 'components/BlogListPagination/BlogListPagination';

const HomePage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data: blogList, loading } = useAppSelector((state) => state.blogList);

  useEffect(() => {
    dispatch(blogListActions.fetchBlogList());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BlogList blogList={blogList} />
          <BlogListPagination />{' '}
        </>
      )}
    </>
  );
};

export default HomePage;
