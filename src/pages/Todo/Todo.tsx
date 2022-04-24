import React, { FC, useState } from 'react';
import { StatusesEnum } from '../../common/common.enums';
import { IItem } from '../../common/interfaces';
import { nanoid } from 'nanoid'
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import CustomizedList from './Todo.style';


const SIZE = 8;

const Todo: FC = () => {
  const [items, setItems] = useState<IItem[]>([]);

  const addItem = (value: string) => {
    const newItem = {
      id: nanoid(SIZE),
      value,
      status: StatusesEnum.ACTIVE,
    }
    const newItems = [...items, newItem];
    const sortedItems = getSortedItems(newItems);
    setItems(sortedItems)
  }

  const deleteItem = (id: string) => {
    const returnedItems = items.filter((item) => item.id !== id);
    setItems(returnedItems);
  }

  const changeStatusItem = (id: string) => {
    const mappedItems = items.map((item) => {
      if (item.id === id) {
        item.status === StatusesEnum.ACTIVE
          ? item.status = StatusesEnum.DONE
          : item.status = StatusesEnum.ACTIVE
      }
      return item;
    });

    const sortedItems = getSortedItems(mappedItems);
    setItems(sortedItems);
  }

  const getSortedItems = (items: IItem[]) => {
    return items.sort((a, b) => a.value > b.value ? -1 : 1)
      .sort((a, b) => a.status === StatusesEnum.DONE ? 1 : -1);
  }

  return (
    <CustomizedList>
      <AddItemForm addNewItem={addItem} />
      <ItemList
        items={items}
        deleteItem={deleteItem}
        changeStatusItem={changeStatusItem}
      />
    </CustomizedList>
  );
}

export default Todo;
