import { FC } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import CustomizedListItem from './Item.style';
import { StatusesEnum } from '../../../common/common.enums';
import { IItem } from '../../../common/interfaces';
import * as actions from '../store/actionCreators';

interface ItemProps {
  item: IItem;
}

const Item: FC<ItemProps> = (props) => {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(actions.changeItemStatus(props.item.id))}
        >
          {props.item.status === StatusesEnum.ACTIVE ? 'Done' : 'Active'}
        </Button>

        <Button
          className="buttons"
          variant="contained"
          size="small"
          color="inherit"
          onClick={() => dispatch(actions.deleteItem(props.item.id))}
        >
          Delete
        </Button>
      </div>
    </CustomizedListItem>
  );
}

export default Item;
