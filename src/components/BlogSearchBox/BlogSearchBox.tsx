import React, { useState } from 'react';
import { blogListFilterActions } from 'redux/blogListFilter/slice';
import { useAppDispatch } from 'redux/hooks';

const BlogSearchBox: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');

  const onChange = (event: any): void => {
    setSearchText(event.target.value);
  };

  const onSearch = (event: any): void => {
    event.preventDefault();
    dispatch(
      blogListFilterActions.changeSearch(
        searchText !== undefined ? searchText : ''
      )
    );
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <div className="form-group mr-2">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
          value={searchText}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default BlogSearchBox;
