import { combineReducers } from 'redux';
import catsFactsReducer from '../pages/FactsAboutCats/store/factsAboutCatsReducer';
import pokemonReducer from '../pages/Pokemon/store/pokemonReducer';
import todoReducer from '../pages/Todo/store/todoReducer';

export const fullStore = {
  catsFactsReducer,
  todoReducer,
  pokemonReducer,
};

const combinedReducer = combineReducers(fullStore);

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

export default rootReducer;
