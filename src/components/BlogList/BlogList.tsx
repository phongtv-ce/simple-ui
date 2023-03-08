import React from 'react';
import BlogListItem from 'components/BlogListItem/BlogListItem';
import { IBlogItem } from 'interfaces/blog.interface';

interface IBlogListProps {
  blogList?: IBlogItem[];
}
const BlogList: React.FC<IBlogListProps> = ({ blogList }): JSX.Element => {
  return (
    <ul className="list-unstyled">
      {blogList !== undefined
        ? blogList.map((blog) => (
            <BlogListItem key={blog.id} {...blog} />
          ))
        : 'empty'}
    </ul>
  );
};

export default BlogList;
