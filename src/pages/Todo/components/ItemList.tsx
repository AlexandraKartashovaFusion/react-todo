import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FilterEnum } from '../../../common/common.enums';

import { IItem } from '../../../common/interfaces';
import { IState } from '../store/todoReducer';
import Item from './Item';
import CustomizedListItem from './ItemList.style';


const ItemList: FC = (props) => {
  const items = useSelector<IState>((state) => state.items) as IItem[];
  const filter = useSelector<IState>((state) => state.filter) as FilterEnum;

  const { filteredItems } = useMemo(() => {
    const filteredItems = items.filter((item) => {
      if (filter === 'all') {
        return true;
      }

      return item.status === filter as string;
    })

    return {
      filteredItems,
    };
  }, [filter, items]);

  return (
    <CustomizedListItem>
      {filteredItems?.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </CustomizedListItem>
  );
}

export default ItemList;
