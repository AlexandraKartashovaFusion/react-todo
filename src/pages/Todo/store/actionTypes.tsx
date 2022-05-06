import { FilterEnum } from "../../../common/common.enums";

export enum ItemActionsEnum {
  ADD = 'add',
  DELETE = 'delete',
  CHANGE_STATUS = 'changeStatus',
  CHANGE_FILTER = 'changeFilter',
};

export type ActionData =
  {
    type: ItemActionsEnum.ADD,
    data: { value: string },
  } |
  {
    type: ItemActionsEnum.DELETE,
    data: { id: string },
  } |
  {
    type: ItemActionsEnum.CHANGE_STATUS,
    data: { id: string },
  } | {
    type: ItemActionsEnum.CHANGE_FILTER,
    data: { filter: FilterEnum },
  };
