import { FilterEnum, StatusesEnum } from "./common.enums";

export interface IItem {
  id: string;
  status: StatusesEnum;
  value: string;
}

export interface IFact {
  text: string;
}

export interface IPokemon {
  name: string;
  id: number;
  url: string;
  img: string;
}

export interface ITodoState {
  items: IItem[];
  filter: FilterEnum;
}

export interface IFactsAboutCatsState {
  facts: IFact[];
}

export interface IPokemonState {
  pokemons: IPokemon[];
  count: number;
  next: string;
  previous: string;
  activePokemon?: IPokemon;
}

export interface IState {
  todoReducer: ITodoState;
  factsAboutCatsReducer: IFactsAboutCatsState;
  pokemonReducer: IPokemonState;
}

export interface IPokemonRequest {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}