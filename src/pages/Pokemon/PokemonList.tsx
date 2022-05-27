import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { getPokemonsThunk, getPokemonsWithPaginationThunk } from './store/thunks';
import { SIZE } from '../../common/constants';
import { nanoid } from 'nanoid';
import CustomizedDiv from './PokemonList.style';
import { useAppDispatch, useAppSelector } from '../../hooks';


const PokemonList: FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemonReducer);
  const { next } = useAppSelector((state) => state.pokemonReducer);
  const { previous } = useAppSelector((state) => state.pokemonReducer);

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, [dispatch]);

  return (
    <CustomizedDiv>
      {pokemons?.length ?
        pokemons.map((pokemon: any) => {
          const url = `/pokemons/${pokemon.id}`;
          return (
            <li key={nanoid(SIZE)}>
              <NavLink to={url}>{pokemon.name}</NavLink>
            </li>
          )
        }) : []
      }
      <div className="actions">
        <button
          disabled={!previous}
          onClick={() => dispatch(getPokemonsWithPaginationThunk(previous))}>
          Back
        </button>
        <button
          disabled={!next}
          onClick={() => dispatch(getPokemonsWithPaginationThunk(next))}>
          Next
        </button>
      </div>
    </CustomizedDiv>
  );
}

export default PokemonList;