import React, { FC } from 'react';
import { IItem } from '../../../common/interfaces';
import Item from './Item';
import CustomizedListItem from './ItemList.style';

interface ItemListProps {
  items: IItem[];
  deleteItem: (id: string) => void;
  changeStatusItem: (id: string) => void;
}

const ItemList: FC<ItemListProps> = (props) => {
  return (
    <CustomizedListItem>
      {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={props.deleteItem}
          changeStatusItem={props.changeStatusItem}
        />
      ))}
    </CustomizedListItem>
  );
}

export default ItemList;
