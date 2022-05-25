import { createSlice } from '@reduxjs/toolkit'
import { IPokemon, IPokemonState } from '../../../common/interfaces';

const initialState: IPokemonState = {
  pokemons: [],
  count: 0,
  next: '',
  previous: '',
}
export const pokemonReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getAll: () => {

    },
    setPokemons: (state: IPokemonState, { payload }) => {
      const newPokemons = payload.results.map((pokemon: IPokemon) => {
        const getId = pokemon.url.split('/');
        pokemon.id = Number(getId[6]);
        return pokemon;
      })

      state.pokemons = newPokemons;
      state.count = payload.count;
      state.next = payload.next;
      state.previous = payload.previous;
    },
    setPokemon: (state: IPokemonState, { payload }) => {

      const img: string = payload?.sprites?.front_default ? payload?.sprites?.front_default :
        payload?.sprites?.front_shiny ? payload?.sprites?.front_shiny : '';

      const activePokemon: IPokemon = {
        id: Number(payload?.id),
        name: String(payload?.name),
        url: String(payload?.species?.url),
        img,
      }
      state.activePokemon = activePokemon;
    },
    setActivePokemon: (state: IPokemonState, { payload }) => {
      state.activePokemon = payload;
    },
  }
});
export const { getAll, setPokemons, setPokemon, setActivePokemon } = pokemonReducer.actions;
export default pokemonReducer.reducer;
