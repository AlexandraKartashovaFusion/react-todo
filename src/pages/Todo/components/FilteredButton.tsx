import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../store/actionCreators';
import { FilterEnum } from '../../../common/common.enums';

interface FilterButtonProps {
  children: React.ReactNode;
  value: FilterEnum;
  currentValue: FilterEnum;
}

const FilterButton: FC<FilterButtonProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      className="actions_button"
      variant="contained"
      size="large"
      color="inherit"
      onClick={() => dispatch(changeFilter(props.value))}
      disabled={props.value === props.currentValue}
    >
      {props.children}
    </Button>
  );
};

export default FilterButton;