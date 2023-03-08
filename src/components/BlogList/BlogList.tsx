import React from 'react';
import BlogListItem from 'components/BlogListItem/BlogListItem';
import { IBlogItem } from 'interfaces/blogItem.interface';
import BlogListEmpty from './BlogListEmpty';

interface IBlogListProps {
  blogList?: IBlogItem[];
}
const BlogList: React.FC<IBlogListProps> = ({ blogList }): JSX.Element => {
  return (
    <div className="container-fluid">
      <ul className="list-unstyled my-2 row">
        {blogList !== undefined && blogList.length > 0 ? (
          blogList.map((blog) => <BlogListItem key={blog.id} {...blog} />)
        ) : (
          <BlogListEmpty />
        )}
      </ul>
    </div>
  );
};

export default BlogList;
