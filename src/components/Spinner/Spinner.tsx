import React from 'react';

const Spinner: React.FC = (): JSX.Element => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
