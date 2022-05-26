import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { FilterEnum } from '../../../common/common.enums';
import { changeFilter } from '../store/todoReducer';
import { useAppSelector } from '../../../hooks';

interface FilterButtonProps {
  children: React.ReactNode;
  value: FilterEnum;
}

const FilterButton: FC<FilterButtonProps> = (props) => {
  const dispatch = useDispatch();
  const filter = useAppSelector((state) => state.todoReducer.filter);

  return (
    <Button
      className="actions_button"
      variant="contained"
      size="large"
      color="inherit"
      onClick={() => dispatch(changeFilter(props.value))}
      disabled={props.value === filter}
    >
      {props.children}
    </Button>
  );
};

export default FilterButton;