import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_FACTS, ROUTE_POKEMONS, ROUTE_POKEMONS_ID, ROUTE_TODO } from '../common/routes.constants';
import Cats from '../pages/FactsAboutCats/FactsAboutCats';
import Pokemon from '../pages/Pokemon/components/Pokemon';
import PokemonList from '../pages/Pokemon/PokemonList';
import Todo from '../pages/Todo/Todo';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_FACTS} element={<Cats />} />
      <Route path={ROUTE_TODO} element={<Todo />} />
      <Route path={ROUTE_POKEMONS} element={<PokemonList />} />
      <Route path={ROUTE_POKEMONS_ID} element={<Pokemon />} />
    </Routes>
  );
};


export default memo(Router);