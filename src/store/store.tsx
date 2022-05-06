import { createStore } from 'redux';
import todoReducer from '../pages/Todo/store/todoReducer';

const store = createStore(todoReducer)
export default store;
