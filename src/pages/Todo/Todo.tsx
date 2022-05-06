import { FC } from 'react';

import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import CustomizedList from './Todo.style';
import ActionButtons from './components/ActionButtons';

const Todo: FC = () => {


  return (
    <CustomizedList>
      <AddItemForm />
      <ActionButtons />
      <ItemList />
    </CustomizedList>
  );
};

export default Todo;
