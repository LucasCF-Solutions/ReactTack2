import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import "./components/UI/App.css";
import "./components/Expenses/ExpenseList";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  
    let VarExpenses = new Array(
    { 
      date: new Date(Date.UTC(2021, 9, 2)),
      title: "Car Insurence",
      value: 239.4,
    },
    {
      date: new Date(Date.UTC(2021, 8, 3)),
      title: "buble head purchase",
      value: 12.4,
    },
    {
      date: new Date(Date.UTC(2021, 7, 23)),
      title: "Mecanic bill",
      value: 1098.4,
    },
    {
      date: new Date(Date.UTC(2021, 2, 21)),
      title: "Supermarket",
      value: 23.4,
    },
    {
      date: new Date(Date.UTC(2021, 2, 21)),
      title: "Churrasco do finde",
      value: 599.4,
    },
  );


  const onAddExpenseHandler = (expenseData) => {
      VarExpenses.push({
        date: expenseData.date,
        title: expenseData.title,
        value: expenseData.amount
      });
    
    console.log(VarExpenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Card className="app-style">
        <ExpenseList expenses={VarExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default App;
