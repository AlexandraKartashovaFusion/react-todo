import { FC, useMemo } from 'react';

import { useAppSelector } from '../../../hooks';
import Item from './Item';
import CustomizedListItem from './ItemList.style';


const ItemList: FC = (props) => {
  const items = useAppSelector((state) => state.todoReducer.items);
  const filter = useAppSelector((state) => state.todoReducer.filter);

  const { filteredItems } = useMemo(() => {
    const filteredItems = items?.filter((item) => {
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
