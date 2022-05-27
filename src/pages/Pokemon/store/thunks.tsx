import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonsApi from '../../../api/pokemonsApi';
import { AppDispatch } from '../../../store/store';
import { setPokemon, setPokemons } from './pokemonReducer';

export const getPokemonsThunk = createAsyncThunk(
  'pokemons/getPokemonsThunk',
  async (payload, { dispatch }) => {
    try {
      const { data: pokemons } = await pokemonsApi.getList();

      dispatch(setPokemons(pokemons));
    } catch (err) {
      dispatch(setPokemons([]));
    }
  },
);

export const getPokemonsWithPaginationThunk = createAsyncThunk<any, GetPath, ThunkDispatch>(
  'pokemons/getPokemonsWithPaginationThunk',
  async (payload, { dispatch }) => {
    try {
      const { data: pokemons } = await pokemonsApi.getPaginationList(payload);

      dispatch(setPokemons(pokemons));
    } catch (err) {
      dispatch(setPokemons([]));
    }
  },
);

export const getPokemonThunk = createAsyncThunk<any, GettingData, ThunkDispatch>(
  'pokemons/getPokemon',
  async(payload, { dispatch }) => {
    try {
      if (!payload) {
        return;
      }
      const { data: info } = await pokemonsApi.getInfo(payload);

      dispatch(setPokemon(info));
    } catch (err) {
      dispatch(setPokemon(null));
    }
  },
);

type ThunkDispatch = {
  dispatch: AppDispatch,
};

type GettingData = string | undefined;

type GetPath = string;