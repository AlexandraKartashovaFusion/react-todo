import React, { FC } from 'react';
import CustomizedDiv from './ActionButtons.style';
import FilterButton from './FilteredButton'
import { FilterEnum } from '../../../common/common.enums';

interface Buttons {
  title: string;
  value: FilterEnum;
}

interface ActionButtonsProps {
  filter: FilterEnum;
  onChangeFilter: (filter: FilterEnum) => void;
};

const FILTER_BUTTONS: Buttons[] = [
  {
    title: 'All',
    value: FilterEnum.ALL,
  },
  {
    title: 'Show Active',
    value: FilterEnum.ACTIVE,
  },
  {
    title: 'Show Done',
    value: FilterEnum.DONE,
  },
];

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  return (
    <CustomizedDiv>
      {
        FILTER_BUTTONS.map((item) => (
          <FilterButton
            key={item.value}
            onChange={props.onChangeFilter}
            value={item.value}
            currentValue={props.filter}
          >
            {item.title}
          </FilterButton>
        ))
      }
    </CustomizedDiv>
  );
}

export default ActionButtons;
