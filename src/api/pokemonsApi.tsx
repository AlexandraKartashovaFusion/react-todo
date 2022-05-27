/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { toast } from 'react-toastify';
import { NUMBER_ELEMENTS } from '../common/constants';
import { IPagination } from '../common/interfaces';

const PATH = 'https://pokeapi.co/api/v2/pokemon/';

const instance = axios.create();
instance.defaults.baseURL = PATH;

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    toast.dark(`${error}`);
    return Promise.reject(error);
  }
);

export const getList = (pagination?: string) => {
  return instance.get(pagination ? pagination : '');
};

export const getPaginationList = (path: IPagination) => {
  return instance.get(
    `?offset=${path.offset}&limit=${path.limit ? path.limit : NUMBER_ELEMENTS}`
  );
};

export const getInfo = (id: string) => {
  return instance.get(`${id}`);
}

export default {
  getList,
  getInfo,
  getPaginationList,
};
