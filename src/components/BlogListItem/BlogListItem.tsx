import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBlogItem } from 'interfaces/blog.interface';

import './BlogListItem.css'

interface IBlogListItemProps extends IBlogItem {}

const BlogListItem: React.FC<IBlogListItemProps> = ({
  id,
  title,
  image,
  content,
  createdAt,
  imageAlt = 'blog thumbnail',
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <li className="media my-1 p-2 pointer" onClick={() => navigate(`/blog/${String(id)}`)}>
      <img
        src={image}
        className="mr-3 img-thumbnail"
        alt={imageAlt}
        style={{ width: 64, height: 64, objectFit: 'cover' }}
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        {content}
      </div>
    </li>
  );
};

export default BlogListItem;
