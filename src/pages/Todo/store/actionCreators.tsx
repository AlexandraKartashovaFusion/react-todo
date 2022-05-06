import { ItemActionsEnum } from './actionTypes';

export const addItem = (payload: string) => {
  return {
    type: ItemActionsEnum.ADD,
    data: {
      value: payload,
    },
  };
};

export const deleteItem = (payload: string) => {
  return {
    type: ItemActionsEnum.DELETE,
    data: {
      id: payload,
    },
  };
};

export const changeItemStatus = (payload: string) => {
  return {
    type: ItemActionsEnum.CHANGE_STATUS,
    data: {
      id: payload,
    },
  };
};

export const changeFilter = (payload: string) => {
  return {
    type: ItemActionsEnum.CHANGE_FILTER,
    data: {
      filter: payload,
    },
  };
};