import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { FilterInput } from './Filter.styled';
import { Label } from '../ContactForm/ContactForm.styled'
import { selectNameFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;