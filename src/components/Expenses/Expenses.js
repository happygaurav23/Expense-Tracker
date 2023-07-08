import React from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from './ExpenseFilter';

export default function Expenses(props){


  const[filteredYear,setFilteredYear] = React.useState("2020")


  function filterChangeHandler(selectedYear){

    setFilteredYear(selectedYear);

  }


  //now we want to render data based on the yearly expense added so will render data by filtering the year and to do that we'll arrays' in built method which is filter method
  // here in our dummy expense date is an object and getFullYear() will give me the year and then i'll convert it to string by using toString() and then compare it with our initial state of the year which is stored in the filteryear variable
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //we know one thing we can store JSX content in variables so we'll use that trick to apply the conditionals logic here
  // let's suppose particular year has no expense then we want to render the message else we want to render the expense of that year
  


  //here ExpenseItem component is rendering data or list of expenses statically so now want to remove that thing
  //for that we'll use map property of arrays which will help us traversing all the items of dummy expenses array in app js component which we are passing form app to expenses component via props
  //so here we will render one ExpenseItem component per element of the array and to do that we'll use curly braces
  // bcz we know whenever we want to execute dynamic expression we use curly braces and inside those curly braces we write our logic or our expression that we want to execute
  //and here map will take a parameter which we have passsed as expense now we'll render things by using that expense parameter
  // also note we are using key property which uniquely identifies each newly expenses that is being added and it is a good practice to use key concept whenever you are dealing with list of items or data in your custom components or built in html components
  return (

    <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </div>

  );
}

