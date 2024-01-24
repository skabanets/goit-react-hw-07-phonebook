import { useDispatch, useSelector } from 'react-redux';
import {
  FilterInput,
  FilterLabel,
  FilterWrpper,
  ResetBtn,
} from './Filter.styled';
import {
  changeFilter,
  resetFilter,
  selectFilters,
} from '../../redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <FilterWrpper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterLabel>
      <ResetBtn type="button" onClick={() => dispatch(resetFilter())}>
        Reset
      </ResetBtn>
    </FilterWrpper>
  );
};
