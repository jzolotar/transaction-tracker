import { Fragment, useEffect, useState } from 'react';
import {
  getConverterValue,
  addTransaction,
  setIsFormValid,
  setTransactions,
  setBalance,
  setCurrency,
  updateTransactions,
} from './store';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';
import TransactionSum from './components/TransactionsSum/TransactionSum';
import MainContainer from './global/MainContainer';
import GlobalStyles from './global/GlobalStyles';
import InnerContainer from './global/InnerContainer';
import BiggestTransaction from './components/BiggestTransaction/BiggestTransaction';
import TransactionsList from './components/TranscationsList/TranscationsList';
import TransactionFrom from './components/TransactionForm/TransactionForm';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import { Loader } from './global/Loader';

function App() {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currency);
  const transactions = useSelector((state) => state.transactions);
  const balance = useSelector((state) => state.balance);
  const converter = useSelector((state) => state.converter);
  //loading state to show content / loader
  const loading = useSelector((state) => state.loading);

  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  useEffect(() => {
    // get converter value EUR = xPLN
    dispatch(getConverterValue());

    //check if localStorage has data, if it has, dispatch actions to load saved data
    const localData = JSON.parse(localStorage.getItem('transactions'));
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    const localBalance = JSON.parse(localStorage.getItem('balance'));
    if (localData) {
      dispatch(setTransactions(localData));
      dispatch(setCurrency(localCurrency));
      dispatch(setBalance(localBalance));
    }
  }, []);

  // send transactions list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // send  currency to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currency', JSON.stringify(currency));
  }, [currency]);

  // send  balance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
  }, [balance]);

  //update PLN amount in existing transactions if exchange rate changes
  useEffect(() => {
    dispatch(updateTransactions(converter));
  }, [converter, dispatch]);

  //form cleanup
  const resetForm = () => {
    setTransactionName('');
    setTransactionAmount('');
  };
  //simple validation
  const isFormValid = (name, amount) => {
    if (!name.replace(/\s+/g, '')) {
      return false;
    }

    if (!amount || +amount === 0) {
      return false;
    }
    return true;
  };

  //handlers
  const onChangeNameHandler = (name) => {
    setTransactionName(name);
  };
  const onChangeAmountHandler = (amount) => {
    setTransactionAmount(amount);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //form validation
    if (!isFormValid(transactionName, transactionAmount)) {
      resetForm();
      //if invalid give error info
      dispatch(setIsFormValid(false));
      return;
    }

    console.log(isFormValid(transactionName, transactionAmount));

    //add transaction
    dispatch(
      addTransaction({
        //create unique id
        id: uuid(),
        title: transactionName,
        amountEUR: +transactionAmount,
      })
    );
    dispatch(setIsFormValid(true));
    resetForm();
  };

  return (
    <Fragment>
      <GlobalStyles />
      <MainContainer>
        <Header />

        {loading ? (
          <Loader />
        ) : (
          <InnerContainer>
            <TransactionSum />
            <BiggestTransaction />
            <TransactionsList />
            <ExchangeRate />
            <TransactionFrom
              onSubmitHandler={onSubmitHandler}
              onChangeAmountHandler={onChangeAmountHandler}
              onChangeNameHandler={onChangeNameHandler}
              name={transactionName}
              amount={transactionAmount}
            />
          </InnerContainer>
        )}
      </MainContainer>
    </Fragment>
  );
}

export default App;
