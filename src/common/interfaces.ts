import { FilterEnum, StatusesEnum } from "./common.enums";

export interface IItem {
  id: string;
  status: StatusesEnum;
  value: string;
}

export interface IState {
  items: IItem[];
  filter: FilterEnum;
}
