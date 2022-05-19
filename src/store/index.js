import { createSlice, configureStore } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  transactions: [],
  balance: 0,
  converter: 0,
  loading: false,
  isFormValid: true,
  currency: 'PLN',
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    setConverter(state, action) {
      state.converter = action.payload;
    },
    addTransaction(state, action) {
      //convert EUR to PLN
      const newTransaction = {
        ...action.payload,
        amountPLN: state.converter * action.payload.amountEUR,
      };
      state.transactions.push(newTransaction);

      //update balance
      state.balance += newTransaction.amountPLN;
    },
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload.id
      );

      state.balance -= action.payload.amountPLN;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    setBalance(state) {
      const list = state.transactions;
      state.balance = list.reduce((value, item) => value + item.amountPLN, 0);
    },
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

const store = configureStore({
  reducer: trackerSlice.reducer,
});

export const {
  addTransaction,
  deleteTransaction,
  setConverter,
  setLoading,
  setIsFormValid,
  setTransactions,
  setBalance,
  setCurrency,
} = trackerSlice.actions;
export default store;

//using thunk to handle converter value for the store
export const getConverterValue = () => async (dispatch) => {
  dispatch(setLoading(true));
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
  dispatch(setConverter(response.data.pln));
  dispatch(setLoading(false));
};
