import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { NavLink } from 'react-router-dom';

import { IPokemon, IState } from '../../common/interfaces';
import { getPokemonsThunk } from './store/thunks';
import { SIZE } from '../../common/constants';
import { nanoid } from 'nanoid';
import CustomizedDiv from './PokemonList.style';


const PokemonList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector<IState>((state) => state.pokemonReducer.pokemons) as IPokemon[];

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