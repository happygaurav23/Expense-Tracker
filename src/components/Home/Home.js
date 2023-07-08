import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import NewExpense from '../NewExpenses/NewExpense';
import Expenses from '../Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Home = (props) => {

  const[expenses,setExpenses] = React.useState(DUMMY_EXPENSES);
  


  function addExpenseHandler(newlyAddedExpense){

    setExpenses((prevExpenses) => {
      return [newlyAddedExpense, ...prevExpenses]
    });

  }

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default Home;
