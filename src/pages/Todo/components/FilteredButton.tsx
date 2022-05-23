import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { FilterEnum } from '../../../common/common.enums';
import { changeFilter } from '../store/todoReducer';
import { IState } from '../../../common/interfaces';

interface FilterButtonProps {
  children: React.ReactNode;
  value: FilterEnum;
}

const FilterButton: FC<FilterButtonProps> = (props) => {
  const dispatch = useDispatch();
  const filter = useSelector<IState>((state) => state.filter) as FilterEnum;

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