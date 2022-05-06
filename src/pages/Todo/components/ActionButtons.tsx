import { FC } from 'react';
import CustomizedDiv from './ActionButtons.style';
import FilterButton from './FilteredButton'
import { FilterEnum } from '../../../common/common.enums';

interface Buttons {
  title: string;
  value: FilterEnum;
}

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

const ActionButtons: FC = (props) => {
  return (
    <CustomizedDiv>
      {
        FILTER_BUTTONS.map((item) => (
          <FilterButton
            key={item.value}
            value={item.value}
          >
            {item.title}
          </FilterButton>
        ))
      }
    </CustomizedDiv>
  );
}

export default ActionButtons;
