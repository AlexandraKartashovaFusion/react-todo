import { FC, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { getPokemonsThunk, getPokemonsWithPaginationThunk, getPokemonThunk } from './store/thunks';
import { NUMBER_ELEMENTS, SIZE } from '../../common/constants';
import { nanoid } from 'nanoid';
import CustomizedDiv from './PokemonList.style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ROUTE_POKEMON, ROUTE_POKEMONS } from '../../common/routes.constants';

enum PageEnum {
  NEXT = 'next',
  PREVIOUS = 'previous'
}

const PokemonList: FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemonReducer);
  const { next } = useAppSelector((state) => state.pokemonReducer);
  const { previous } = useAppSelector((state) => state.pokemonReducer);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Number(page) !== 1) {
      dispatch(getPokemonsWithPaginationThunk({ offset: NUMBER_ELEMENTS * Number(page), limit: 0}));
    } else {
      dispatch(getPokemonsThunk());
    }
  }, [dispatch, page]);

  const handleNavigation = (direction: PageEnum) => {
    const currentPage = Number(page);

    if (direction === PageEnum.NEXT && next && page) {
      dispatch(getPokemonsThunk(next));
      navigate(`/pokemons/${currentPage + 1}`);
    } else if (direction === PageEnum.PREVIOUS && previous && page) {
      dispatch(getPokemonsThunk(previous));
      navigate(`/pokemons/${currentPage - 1}`);
    }
  }

  return (
    <CustomizedDiv>
      {pokemons?.length ?
        pokemons.map((pokemon: any) => {
          const url = `${ROUTE_POKEMONS}${ROUTE_POKEMON}/${pokemon.id}`;
          return (
            <li
              key={nanoid(SIZE)}
              onClick={() => dispatch(getPokemonThunk(pokemon.id))}
            >
              <NavLink to={url}>{pokemon.name}</NavLink>
            </li>
          )
        }) : []
      }
      <div className="actions">
        <button
          disabled={!previous}
          onClick={() => handleNavigation(PageEnum.PREVIOUS)}
        >
          Back
        </button>
        <button
          disabled={!next}
          onClick={() => handleNavigation(PageEnum.NEXT)}
        >
          Next
        </button>
      </div>
    </CustomizedDiv>
  );
}

export default PokemonList;