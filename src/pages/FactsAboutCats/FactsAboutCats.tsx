import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFact, IState } from '../../common/interfaces';
import { AppDispatch } from '../../store/store';
import { getFactsThunk } from './store/thunk';

const Cats: FC = () => {
  const dispatch = useDispatch <AppDispatch>();
  const facts = useSelector<IState>((state) => state.factsAboutCatsReducer?.facts ) as IFact[];

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
