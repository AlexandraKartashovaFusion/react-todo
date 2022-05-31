import { FC } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import CustomizedListItem from './Item.style';
import { StatusesEnum } from '../../../common/common.enums';
import { IItem } from '../../../common/interfaces';
import { deleteItem, changeItemStatus } from '../store/todoReducer';

interface ItemProps {
  item: IItem;
}

const Item: FC<ItemProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <CustomizedListItem>
      <div className={props.item.status === StatusesEnum.DONE ? "container done-item" : "container"}>
        <p className={props.item.status === StatusesEnum.ACTIVE ? "text-bolt" : "text"}>
          {props.item.value}
        </p>
        <div className="actions">
          <Button
            className="buttons"
            variant="contained"
            size="small"
            color={props.item.status === StatusesEnum.ACTIVE ? "success" : "info"}
            onClick={() => dispatch(changeItemStatus(props.item.id))}
          >
            {props.item.status === StatusesEnum.ACTIVE ? 'Done' : 'Active'}
          </Button>

          <Button
            className="buttons"
            variant="contained"
            size="small"
            color="error"
            onClick={() => dispatch(deleteItem(props.item.id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </CustomizedListItem>
  );
}

export default Item;
