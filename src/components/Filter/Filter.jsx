import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        onChange={e => dispatch(setFilter(e.target.value))}
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
      />
    </div>
  );
};
