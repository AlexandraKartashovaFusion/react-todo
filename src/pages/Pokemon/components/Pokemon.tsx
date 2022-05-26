import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import { getPokemonThunk } from '../store/thunks';
import CustomizedDiv from './Pokemon.style';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const Pokemon: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = useAppSelector((state) => state.pokemonReducer?.activePokemon);
  const goBack = () => navigate(-1);

  if (!pokemon?.id || !pokemon?.name || !pokemon?.url) {
    goBack();
  }

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