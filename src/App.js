import { Fragment, useEffect, useState } from 'react';
import { getConverterValue, addTransaction } from './store';
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

function App() {
  const dispatch = useDispatch();
  const converter = useSelector((state) => state.converter);
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  // get converter value EUR = xPLN
  useEffect(() => {
    dispatch(getConverterValue());
  }, []);

  //form cleanup + validation
  const resetForm = () => {
    setTransactionName('');
    setTransactionAmount('');
  };

  const formValidation = (name, amount) => {
    if (!name.replace(/\s+/g, '')) {
      console.log('enter valid name');
      return;
    }

    if (!amount) {
      console.log('enter valid amount');
      return;
    }
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

    //simple validation
    formValidation(transactionName, transactionAmount);

    //add transaction
    dispatch(
      addTransaction({
        id: uuid(),
        title: transactionName,
        amountEUR: +transactionAmount,
      })
    );

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
