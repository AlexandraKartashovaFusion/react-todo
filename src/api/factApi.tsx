/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const PATH = 'https://cat-fact.herokuapp.com/facts';
export const getList = () => {
  return axios.get(PATH);
};

export default {
  getList,
};
