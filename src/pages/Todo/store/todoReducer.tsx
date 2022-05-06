import { ActionData, ItemActionsEnum } from './actionTypes';
import { nanoid } from 'nanoid';
import { FilterEnum, StatusesEnum } from '../../../common/common.enums';
import { IItem } from '../../../common/interfaces';

const SIZE = 8;

export interface IState {
  items: IItem[];
  filter: FilterEnum;
}

const initialState: IState = {
  items: [],
  filter: FilterEnum.ALL,
}

const todoReducer = (state: IState = initialState, action: ActionData): IState => {
  const { items, filter } = state;
  switch (action.type) {
    case ItemActionsEnum.ADD:
      const newItem = {
        id: nanoid(SIZE),
        value: action.data.value,
        status: StatusesEnum.ACTIVE,
      }
      const newItems = [...items, newItem];
      const sortedItems = getSortedItems(newItems);

      return {
        items: sortedItems,
        filter,
      };

    case ItemActionsEnum.DELETE:
      const returnedItems = items.filter((item) => item.id !== action.data.id);
      return {
        items: returnedItems,
        filter,
      };

    case ItemActionsEnum.CHANGE_STATUS:
      const mappedItems = state.items.map((item) => {
        if (item.id === action.data.id) {
          const status = item.status === StatusesEnum.ACTIVE
            ? item.status = StatusesEnum.DONE
            : item.status = StatusesEnum.ACTIVE;

          return { ...item, status };
        }
        return item;
      });

      const sortedItemsAfterChangeStatus = getSortedItems(mappedItems);
      return {
        items: sortedItemsAfterChangeStatus,
        filter,
      };

    case ItemActionsEnum.CHANGE_FILTER:
      return {
        items: state.items,
        filter: action.data.filter,
      };

    default:
      return state;
  }
};

const getSortedItems = (items: IItem[]) => {
  return items.sort((a, b) => a.value > b.value ? -1 : 1)
    .sort((a, b) => a.status === StatusesEnum.DONE ? 1 : -1);
}

export default todoReducer;

