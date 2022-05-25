import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';

import { IPokemon, IState } from '../../../common/interfaces';
import { getPokemonThunk } from '../store/thunks';
import CustomizedDiv from './Pokemon.style';


const Pokemon: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = useSelector<IState>((state) => state.pokemonReducer?.activePokemon) as IPokemon;

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(getPokemonThunk(id));
  }, [dispatch, id]);

  return (
    <CustomizedDiv>
      <button onClick={goBack}>Go Back</button>
      <div className="info">
        <p>{pokemon?.name?.toUpperCase()}</p>
        <img src={pokemon?.img} alt={pokemon?.img} />
      </div>
    </CustomizedDiv>
  );
}

export default Pokemon;