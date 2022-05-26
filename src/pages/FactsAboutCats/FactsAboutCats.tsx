import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

import { getFactsThunk } from './store/thunk';
import { useAppSelector } from '../../hooks';

const Cats: FC = () => {
  const dispatch = useDispatch <AppDispatch>();
  const facts = useAppSelector((state) => state.factsAboutCatsReducer?.facts);

  useEffect(() => {
    dispatch(getFactsThunk());
  }, [dispatch]);

  return (
    <div>
      {facts?.length ?
        facts.map((fact: any) => {
          return (
            <p key={ fact.text}>
              {fact.text}
            </p>
          )
        }) : []
      }
    </div>
  );
}

export default Cats;
