import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterEnum } from '../../common/common.enums';
import { IItem } from '../../common/interfaces';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import CustomizedList from './Todo.style';
import ActionButtons from './components/ActionButtons';
import * as actions from './store/actionCreators';
import { IState } from './store/todoReducer';

const Todo: FC = () => {
  const dispatch = useDispatch();
  const items: IItem[] = useSelector<IState>((state) => state.items) as IItem[];
  const filter: FilterEnum = useSelector<IState>((state) => state.filter) as FilterEnum;

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
    <CustomizedList>
      <AddItemForm onAddNewItem={(data) => dispatch(actions.addItem(data))} />
      <ActionButtons
        filter={filter}
        onChangeFilter={(data) => dispatch(actions.changeFilter(data))} />
      <ItemList
        items={filteredItems}
        onDeleteItem={(data) => dispatch(actions.deleteItem(data))}
        onChangeStatusItem={(data) => dispatch(actions.changeItemStatus(data))}
      />
    </CustomizedList>
  );
};

export default Todo;
