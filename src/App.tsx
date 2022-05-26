import { NavLink } from 'react-router-dom';

import CustomizedHeader from './App.style';
import Router from '././Router/Router';
import {
  ROUTE_FACTS,
  ROUTE_POKEMONS,
  ROUTE_TODO,
} from './common/routes.constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
      />

      <CustomizedHeader>
        <NavLink to={ROUTE_FACTS}>Facts about cats</NavLink>
        <NavLink to={ROUTE_TODO}>TODO</NavLink>
        <NavLink to={ROUTE_POKEMONS}>Pokemons</NavLink>
      </CustomizedHeader>

      <Router />
    </>
  );
}

export default App;
