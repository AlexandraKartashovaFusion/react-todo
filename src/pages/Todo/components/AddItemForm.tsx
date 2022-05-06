import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import CustomizedListItem from './AddItemForm.style';
import { addItem } from '../store/actionCreators';

const AddItemForm: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();

    if (!inputValue) {
      return;
    }
    dispatch(addItem(inputValue))
    setInputValue('')
  }
  return (
    <CustomizedListItem disablePadding>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <Button
          className="buttons"
          variant="contained"
          size="large"
          color="inherit"
          type="submit"
        >
          Add
        </Button>
      </form>
    </CustomizedListItem>
  );
}

export default AddItemForm;
