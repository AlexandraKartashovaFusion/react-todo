import { StatusesEnum } from "./common.enums";

export interface IItem {
  id: string;
  status: StatusesEnum;
  value: string;
}