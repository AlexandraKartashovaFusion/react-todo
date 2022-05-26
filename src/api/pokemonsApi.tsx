/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { toast } from 'react-toastify';

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

export const getList = () => {
  return instance.get('');
};

export const getInfo = (id: string) => {
  return instance.get(`${id}`);
}

export default {
  getList,
  getInfo,
};
