import BlogDetails from 'components/BlogDetails/BlogDetails';
import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogDetailsActions } from 'redux/blogDetails/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const BlogDetailsPage: React.FC = (): JSX.Element => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.blogDetails);

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(blogDetailsActions.fetchBlogDetails(blogId));
    }
  }, [blogId]);
  return loading ? <Spinner /> : <BlogDetails {...data} />;
};

export default BlogDetailsPage;
