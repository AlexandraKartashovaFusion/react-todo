import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../pages/Todo/store/todoReducer';

const store = configureStore({ reducer: todoReducer });

export default store;
