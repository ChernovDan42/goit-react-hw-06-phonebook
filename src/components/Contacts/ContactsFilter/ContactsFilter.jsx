import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterChange(value.trim()));
  };

  return (
    <>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};
