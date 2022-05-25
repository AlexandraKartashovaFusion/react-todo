import { NavLink } from 'react-router-dom';

import CustomizedHeader from './App.style';
import Router from '././Router/Router';
import {
  ROUTE_FACTS,
  ROUTE_POKEMONS,
  ROUTE_TODO,
} from './common/routes.constants';

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      {/* Toastify */}
      {/* <ToastContainer
        autoClose={3000}
        draggable
        newestOnTop
        closeButton={false}
      /> */}
      <CustomizedHeader>
        <NavLink to={ROUTE_FACTS}>Facts about cats</NavLink>
        <NavLink to={ROUTE_TODO}>TODO</NavLink>
        <NavLink to={ROUTE_POKEMONS}>Pokemons</NavLink>
      </CustomizedHeader>

      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
