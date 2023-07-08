import React from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props){


    const[isEditing,setIsEditing] = React.useState(false);

    function saveExpenseDataHandler(enteredExpenseData){

        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);

    }


    function startEditingHandler(){

        setIsEditing(true);

    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    //here what we are doing here is we are passing data form child to parent component so in this case is expenseform is child and NewExpense component is parent component and then again NewExpense will be traeated as a child component and it will pass data to parent component which is using it and that will be our app component


    return <div className="new-expense">

        {!isEditing && <button onClick={startEditingHandler}>Add New Expense Here</button>}


        

        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}


    </div>


}