import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import TransactionSum from './components/TransactionsSum/TransactionSum';
import MainContainer from './global/MainContainer';
import GlobalStyles from './global/GlobalStyles';
import InnerContainer from './global/InnerContainer';
import BiggestTransaction from './components/BiggestTransaction/BiggestTransaction';
import TransactionsList from './components/TranscationsList/TranscationsList';
import TransactionFrom from './components/TransactionForm/TransactionForm';

function App() {
  const [transaction, setTransaction] = useState({ name: '', amount: 0 });

  const onChangeHandler = (name, amount) => {};
  const onSubmitHandler = (e) => {
    e.preventDefault();
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
            onChangeHandler={onChangeHandler}
          />
        </InnerContainer>
      </MainContainer>
    </Fragment>
  );
}

export default App;
