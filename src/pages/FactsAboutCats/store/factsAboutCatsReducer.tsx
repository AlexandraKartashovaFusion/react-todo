import { createSlice } from '@reduxjs/toolkit'
import { IFactsAboutCatsState } from '../../../common/interfaces';

const initialState: IFactsAboutCatsState = {
  facts: [],
}

export const factsAboutCatsReducer = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    setFacts: (state: IFactsAboutCatsState, { payload }) => {
      state.facts = payload;
    },
  }
});
export const { setFacts } = factsAboutCatsReducer.actions;
export default factsAboutCatsReducer.reducer;
