import { Routes, Route, NavLink } from 'react-router-dom';

import Cats from './pages/FactsAboutCats/FactsAboutCats';
import Pokemon from './pages/Pokemon/components/Pokemon';
import PokemonList from './pages/Pokemon/PokemonList';
import Todo from './pages/Todo/Todo';
import CustomizedHeader from './App.style';
import {
  ROUTE_FACTS,
  ROUTE_POKEMONS,
  ROUTE_POKEMONS_ID,
  ROUTE_TODO,
} from './common/routes.constants';

function App() {
  return (
    <>
      <CustomizedHeader>
        <NavLink to={ROUTE_FACTS}>Facts about cats</NavLink>
        <NavLink to={ROUTE_TODO}>TODO</NavLink>
        <NavLink to={ROUTE_POKEMONS}>Pokemons</NavLink>
      </CustomizedHeader>

      <Routes>
        <Route path={ROUTE_FACTS} element={<Cats />} />
        <Route path={ROUTE_TODO} element={<Todo />} />
        <Route path={ROUTE_POKEMONS} element={<PokemonList />} />
        <Route path={ROUTE_POKEMONS_ID} element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
