import { createAsyncThunk } from '@reduxjs/toolkit';
import factApi from '../../../api/factApi';
import { setFacts } from './factsAboutCatsReducer';


export const getFactsThunk = createAsyncThunk(
  'facts/getFactsThunk',
  async (payload, { dispatch }) => {
    try {
      const { data: facts } = await factApi.getList();
      dispatch(setFacts(facts));
    } catch (err) {
      dispatch(setFacts([]));
    }
  },
);
