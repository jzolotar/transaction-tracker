import { Fragment, useEffect, useState } from 'react';
import { getConverterValue, addTransaction, setIsFormValid } from './store';
import { useDispatch } from 'react-redux';
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

function App() {
  const dispatch = useDispatch();
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  // get converter value EUR = xPLN
  useEffect(() => {
    dispatch(getConverterValue());
  }, []);

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

    if (!amount) {
      console.log('enter valid amount');
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
      </MainContainer>
    </Fragment>
  );
}

export default App;
