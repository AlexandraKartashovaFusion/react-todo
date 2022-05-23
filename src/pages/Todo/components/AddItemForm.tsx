import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import TextField from '@mui/material/TextField';
import CustomizedListItem from './AddItemForm.style';
import { addItem } from '../store/todoReducer';
import { StatusesEnum } from '../../../common/common.enums';
import { IItem } from '../../../common/interfaces';

const SIZE = 8;

const AddItemForm: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();
    const value = inputValue.trim();
    if (!value || value === '') {
      return;
    }
    const newItem: IItem = {
      id: nanoid(SIZE),
      value,
      status: StatusesEnum.ACTIVE,
    }
    dispatch(addItem(newItem))
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
