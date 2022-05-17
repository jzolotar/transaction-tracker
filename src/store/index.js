import { createSlice, configureStore } from '@reduxjs/toolkit';

const url =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/pln.json';

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
    setConverter(state, actions) {},
  },
});

const store = configureStore({
  reducer: trackerSlice.reducer,
});

export const { addTransaction, deleteTransaction } = trackerSlice.actions;
export default store;
