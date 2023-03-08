import React from 'react';
import { IBlogDetails } from 'interfaces/blog.interface';

interface IBlogDetailsProps extends Partial<IBlogDetails>{
}
const BlogDetails: React.FC<IBlogDetailsProps> = ({
  id,
  title,
  image,
  imageAlt,
  content,
  createdAt,
}): JSX.Element => {
  return (
    <div className="media">
      <img src={image} className="img-thumbnail mr-3" alt={imageAlt} />
      <div className="media-body">
        <h5 className="mt-0">{title}</h5>
        {content}
        <br/>
        {createdAt !== undefined && new Date(String(createdAt)) .toLocaleString()}
      </div>
    </div>
  );
};

export default BlogDetails;
