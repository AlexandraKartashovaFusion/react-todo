import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterEnum } from '../../common/common.enums';
import { IItem } from '../../common/interfaces';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import CustomizedList from './Todo.style';
import ActionButtons from './components/ActionButtons';
import { IState } from './store/todoReducer';

const Todo: FC = () => {
  const dispatch = useDispatch();
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
    <CustomizedList>
      <AddItemForm />
      <ActionButtons filter={filter}/>
      <ItemList items={filteredItems}
      />
    </CustomizedList>
  );
};

export default Todo;
