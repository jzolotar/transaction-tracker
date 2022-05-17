import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import TransactionSum from './components/TransactionsSum/TransactionSum';
import MainContainer from './global/MainContainer';
import GlobalStyles from './global/GlobalStyles';
import InnerContainer from './global/InnerContainer';
import BiggestTransaction from './components/BiggestTransaction/BiggestTransaction';
import TransactionsList from './components/TranscationsList/TranscationsList';
import TransactionFrom from './components/TransactionForm/TransactionForm';
import { getConverterValue } from './store';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const resetForm = () => {
    setTransactionName('');
    setTransactionAmount('');
  };

  const onChangeNameHandler = (name) => {
    setTransactionName(name);
  };
  const onChangeAmountHandler = (amount) => {
    setTransactionAmount(amount);
  };

  const onSubmitHandler = (e) => {
    console.log(+transactionAmount, transactionName);
    e.preventDefault();
    dispatch(getConverterValue());
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
