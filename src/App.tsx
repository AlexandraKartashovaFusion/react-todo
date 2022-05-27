import { NavLink } from 'react-router-dom';

import CustomizedHeader from './App.style';
import Router from '././Router/Router';
import {
  ROUTE_FACTS,
  ROUTE_POKEMONS,
  ROUTE_TODO,
} from './common/routes.constants';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FIRST_PAGE } from './common/constants';

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
      />

      <CustomizedHeader>
        <NavLink to={ROUTE_FACTS}>Facts about cats</NavLink>
        <NavLink to={ROUTE_TODO}>TODO</NavLink>
        <NavLink to={`${ROUTE_POKEMONS}/${FIRST_PAGE}`}>Pokemons</NavLink>
      </CustomizedHeader>

      <Router />
    </>
  );
}

export default App;
