import React from 'react';
import { IBlogDetails } from 'interfaces/blogDetails.interface';

interface IBlogDetailsProps extends Partial<IBlogDetails> {}
const BlogDetails: React.FC<IBlogDetailsProps> = ({
  title,
  image,
  imageAlt,
  content,
  createdAt,
}): JSX.Element => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col">
          <img src={image} className="img-thumbnail mr-3" alt={imageAlt} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h5 className="mt-0">{title}</h5>
          {content}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-secondary">
          {createdAt !== undefined &&
            new Date(String(createdAt)).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
