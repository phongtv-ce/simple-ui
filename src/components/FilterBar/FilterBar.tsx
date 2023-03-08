import React from 'react';
import { blogListFilterActions } from 'redux/blogListFilter/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const FilterBar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { sortBy, order } = useAppSelector((state) => state.blogListFilter);
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col">
          <form className="form-inline my-2 my-lg-0">
            <div className="form-group mr-2">
              <label htmlFor="sortBy" className="mr-2">
                Sort by:
              </label>
              <select
                className="form-control"
                id="sortBy"
                value={sortBy}
                onChange={(e) =>
                  dispatch(blogListFilterActions.changeSortBy(e.target.value))
                }
              >
                <option>id</option>
                <option>title</option>
                <option>createdAt</option>
              </select>
            </div>
            <div className="form-group mr-2">
              <label htmlFor="sortBy" className="mr-2">
                Order:
              </label>
              <select
                className="form-control"
                id="sortBy"
                value={order}
                onChange={(e) =>
                  dispatch(blogListFilterActions.changeOrder(e.target.value))
                }
              >
                <option>asc</option>
                <option>desc</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
