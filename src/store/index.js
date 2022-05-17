import { createSlice, configureStore } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  transactions: [],
  balance: 0,
  converter: 0,
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addTransaction(state, actions) {},
    deleteTransaction(state, actions) {},
    setConverter(state, actions) {
      state.converter = actions.payload;
    },
  },
});

const store = configureStore({
  reducer: trackerSlice.reducer,
});

export const { addTransaction, deleteTransaction, setConverter } =
  trackerSlice.actions;
export default store;

export const getConverterValue = () => async (dispatch) => {
  const url =
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/pln.json';

  const response = await axios(url).catch((err) => {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      return;
    } else if (err.request) {
      console.log(err.request);
      return;
    } else {
      console.log('Error', err.message);
      return;
    }
  });
  console.log(response.data.pln);
  dispatch(setConverter(response.data.pln));
};
