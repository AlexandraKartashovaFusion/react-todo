/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const PATH = 'https://cat-fact.herokuapp.com/facts';

const instance = axios.create();
instance.defaults.baseURL = PATH;

export const getList = () => {
  return instance.get('');
};

export default {
  getList,
};
