import React from 'react';
import emptyDataPNG from '../../images/empty_data.png';

const BlogListEmpty: React.FC = (): JSX.Element => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col text-center">
          <img
            src={emptyDataPNG}
            width="130"
            height="130"
            className="img-fluid mb-4 mr-3"
          />
          <h5>
            <strong>Empty</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BlogListEmpty;
