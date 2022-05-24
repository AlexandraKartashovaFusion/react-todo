import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './common/components/Layout';
import Cats from './pages/FactsAboutCats/FactsAboutCats';
import Pokemon from './pages/Pokemon/Pokemon';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/facts' element={<Cats />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/pokemons' element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
