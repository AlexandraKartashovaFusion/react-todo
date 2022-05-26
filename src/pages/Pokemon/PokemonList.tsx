import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { getPokemonsThunk } from './store/thunks';
import { SIZE } from '../../common/constants';
import { nanoid } from 'nanoid';
import CustomizedDiv from './PokemonList.style';
import { useAppDispatch, useAppSelector } from '../../hooks';


const PokemonList: FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemonReducer);

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, [dispatch]);

  return (
    <CustomizedDiv>
      {pokemons?.length ?
        pokemons.map((pokemon: any) => {
          const url = `/pokemons/${pokemon.id}`;
          return (
            <>
              <li key={nanoid(SIZE)}>
                <NavLink to={url}>{pokemon.name}</NavLink>
              </li>
            </>
          )
        }) : []
      }
    </CustomizedDiv>
  );
}

export default PokemonList;