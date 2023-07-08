import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card/Card';
import './ExpenseItem.css';

export default function ExpenseItem(props){
  
    //useState hook always return an array with exactly two elements where first element
    //will be the current state value and the second elemenet will be a function for updating that value. 
    // const [title,setTitle] = React.useState(props.title)

    // function clickHandler(){
    //     setTitle('New Laptop');
    //     console.log(title);
    // }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

