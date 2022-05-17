import { createSlice, configureStore } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  transactions: [],
  balance: 0,
  converter: 0,
  loading: false,
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    setConverter(state, action) {
      state.converter = action.payload;
    },
    addTransaction(state, action) {
      console.log(state.converter);

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
  },
});

const store = configureStore({
  reducer: trackerSlice.reducer,
});

export const { addTransaction, deleteTransaction, setConverter, setLoading } =
  trackerSlice.actions;
export default store;

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
