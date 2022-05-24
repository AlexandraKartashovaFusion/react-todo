import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import CustomizedHeader from './Layout.style';

const Layout: FC = () => {

  return (
    <>
      <CustomizedHeader>
        <NavLink to='/facts'>Facts about cats</NavLink>
        <NavLink to='/todo'>TODO</NavLink>
        <NavLink to='/pokemons'>Pokemons</NavLink>
      </CustomizedHeader>
      <Outlet />
    </>
  );
};

export default Layout;
