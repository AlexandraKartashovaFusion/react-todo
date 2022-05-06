import React, { FC } from 'react';
import Button from '@mui/material/Button';

import { FilterEnum } from '../../../common/common.enums';

interface FilterButtonProps {
  onChange: (value: FilterEnum) => void;
  children: React.ReactNode;
  value: FilterEnum;
  currentValue: FilterEnum;
}

const FilterButton: FC<FilterButtonProps> = (props) => {
  return (
    <Button
      className="actions_button"
      variant="contained"
      size="large"
      color="inherit"
      onClick={() => props.onChange(props.value)}
      disabled={props.value === props.currentValue}
    >
      {props.children}
    </Button>
  );
};

export default FilterButton;