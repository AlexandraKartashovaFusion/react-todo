import { FC } from 'react';

import { IItem } from '../../../common/interfaces';
import Item from './Item';
import CustomizedListItem from './ItemList.style';

interface ItemListProps {
  items: IItem[];
}

const ItemList: FC<ItemListProps> = (props) => {
  return (
    <CustomizedListItem>
      {props?.items?.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </CustomizedListItem>
  );
}

export default ItemList;
