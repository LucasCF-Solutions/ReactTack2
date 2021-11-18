import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const  [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Updated");
    console.log("title updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.value}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
