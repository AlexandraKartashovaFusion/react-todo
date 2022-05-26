import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getPokemonThunk } from '../store/thunks';
import CustomizedDiv from './Pokemon.style';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const Pokemon: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { activePokemon } = useAppSelector((state) => state.pokemonReducer);
  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(getPokemonThunk(id));
  }, [dispatch, id]);

  if (!activePokemon?.id || !activePokemon?.name || !activePokemon?.url) {
    return null;
  }

  return (
    <CustomizedDiv>
      <button onClick={goBack}>Go Back</button>
      <div className="info">
        <p>{activePokemon?.name?.toUpperCase()}</p>
        <img src={activePokemon?.img} alt={activePokemon?.img} />
      </div>
    </CustomizedDiv>
  );
}

export default Pokemon;