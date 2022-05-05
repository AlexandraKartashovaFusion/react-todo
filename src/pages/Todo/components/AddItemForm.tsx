import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedListItem from './AddItemForm.style';
interface AddItemFormProps {
  onAddNewItem: (value: string) => void;
}

const AddItemForm: FC<AddItemFormProps> = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();

    if (!inputValue) {
      return;
    }
    props.onAddNewItem(inputValue);
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
