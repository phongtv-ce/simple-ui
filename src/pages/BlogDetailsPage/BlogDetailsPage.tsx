import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogDetailsActions } from 'redux/blogDetails/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import BlogDetails from 'components/BlogDetails/BlogDetails';
import Spinner from 'components/Spinner/Spinner';
import NotFound from 'components/NotFound/NotFound';

const BlogDetailsPage: React.FC = (): JSX.Element => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.blogDetails);

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(blogDetailsActions.fetchBlogDetails(blogId));
    }
  }, [blogId]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      {Object.keys(data).length !== 0 ? (
        <BlogDetails {...data} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default BlogDetailsPage;
