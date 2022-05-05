import React, { FC, useState, useMemo } from 'react';
import { FilterEnum, StatusesEnum } from '../../common/common.enums';
import { IItem } from '../../common/interfaces';
import { nanoid } from 'nanoid'
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import CustomizedList from './Todo.style';
import ActionButtons from './components/ActionButtons';


const SIZE = 8;

const Todo: FC = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ALL);

  const { filteredItems } = useMemo(() => {
    let activeItemsCount = 0;
    const filteredItems = items.filter((item) => {
      if (item.status === 'active') {
        ++activeItemsCount;
      }
      if (filter === 'all') {
        return true;
      }

      return item.status === filter as string;
    })

    return {
      filteredItems,
      activeItemsCount,
      finishedItemsCount: items.length - activeItemsCount,
    };
  }, [filter, items]);

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

  const onDeleteItem = (id: string) => {
    const returnedItems = items.filter((item) => item.id !== id);
    setItems(returnedItems);
  }

  const onChangeStatusItem = (id: string) => {
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

  const onChangeFilter = (filter: FilterEnum) => {
    setFilter(filter);
  }

  return (
    <CustomizedList>
      <AddItemForm onAddNewItem={addItem} />
      <ActionButtons
        filter={filter}
        onChangeFilter={onChangeFilter} />
      <ItemList
        items={filteredItems}
        onDeleteItem={onDeleteItem}
        onChangeStatusItem={onChangeStatusItem}
      />
    </CustomizedList>
  );
}

export default Todo;
