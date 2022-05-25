/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const PATH = 'https://pokeapi.co/api/v2/pokemon/';
export const getList = () => {
  return axios.get(PATH);
};

export const getInfo = (id: string) => {
  return axios.get(`${PATH}${id}`);
}

export default {
  getList,
  getInfo,
};
