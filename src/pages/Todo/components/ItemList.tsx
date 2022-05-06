import { FC } from 'react';

import { IItem } from '../../../common/interfaces';
import Item from './Item';
import CustomizedListItem from './ItemList.style';

interface ItemListProps {
  items: IItem[];
  onDeleteItem: (id: string) => void;
  onChangeStatusItem: (id: string) => void;
}

const ItemList: FC<ItemListProps> = (props) => {
  return (
    <CustomizedListItem>
      {props?.items?.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onChangeStatusItem={props.onChangeStatusItem}
        />
      ))}
    </CustomizedListItem>
  );
}

export default ItemList;
