import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer } from './filter.styled';
import { setFilter, selectFilter } from 'redux/slice/filtersSlice';


export const Filter = () => {
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterContacts = value => {
    dispatch(setFilter(value.currentTarget.value));
  };

  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <input
        value={filters}
        onChange={handleFilterContacts}
        type="text"
        name="filter"
        placeholder="name search"
      ></input>
    </FilterContainer>
  );
};
