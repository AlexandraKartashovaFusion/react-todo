import React, { FC } from 'react';
import Button from '@mui/material/Button';

import CustomizedListItem from './Item.style';
import { StatusesEnum } from '../../../common/common.enums';
import { IItem } from '../../../common/interfaces';


interface ItemProps {
  item: IItem;
  onDeleteItem: (id: string) => void;
  onChangeStatusItem: (id: string) => void;
}

const Item: FC<ItemProps> = (props) => {
  const deleteItem = () => {
    props.onDeleteItem(props.item.id);
  }
  const changeStatusItem = () => {
    props.onChangeStatusItem(props.item.id)
  }

  return (
    <CustomizedListItem>
      <p className={props.item.status === StatusesEnum.ACTIVE ? "text-bolt" : "text"}>
        {props.item.value}
      </p>
      <div className="actions">
        <Button
          className="buttons"
          variant="contained"
          size="small"
          color="inherit"
          onClick={changeStatusItem}
        >
          {props.item.status === StatusesEnum.ACTIVE ? 'Done' : 'Active'}
        </Button>

        <Button
          className="buttons"
          variant="contained"
          size="small"
          color="inherit"
          onClick={deleteItem}
        >
          Delete
        </Button>
      </div>
    </CustomizedListItem>
  );
}

export default Item;
