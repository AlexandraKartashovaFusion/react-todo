import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

import { FilterEnum, StatusesEnum } from '../../../common/common.enums';
import { IItem, IState } from '../../../common/interfaces';

const SIZE = 8;

const initialState: IState = {
  items: [],
  filter: FilterEnum.ALL,
}
export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state: IState, {payload} ) => {
      const newItem: IItem = {
        id: nanoid(SIZE),
        value: payload.value,
        status: StatusesEnum.ACTIVE,
      }
      const newItems = [...state.items, newItem];

      state.items = getSortedItems(newItems);
    },
    changeFilter: (state: IState, { payload }) => {
      state.filter = payload;
    },
    deleteItem: (state: IState, { payload }) => {
      const returnedItems = state.items.filter((item) => item.id !== payload);
      state.items = returnedItems;
    },
    changeItemStatus: (state: IState, { payload }) => {
      const mappedItems = state.items.map((item) => {
        if (item.id === payload) {
          const status = item.status === StatusesEnum.ACTIVE
            ? item.status = StatusesEnum.DONE
            : item.status = StatusesEnum.ACTIVE;

          return { ...item, status };
        }
        return item;
      });

      const sortedItemsAfterChangeStatus = getSortedItems(mappedItems);
      state.items = sortedItemsAfterChangeStatus;
    },
  }
});

const getSortedItems = (items: IItem[]) => {
  return items.sort((a, b) => a.value > b.value ? -1 : 1)
    .sort((a, b) => a.status === StatusesEnum.DONE ? 1 : -1);
}

export const { addItem, deleteItem, changeFilter, changeItemStatus } = todoReducer.actions
export default todoReducer.reducer
