//Expense Items functions

//can return only one root element

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import { useState } from 'react';
//props is a single object that contains all the parameters sent

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = 'Insurance';
  //   const expenseAmount = 294.67;
  //   return <h2>Expense Item!</h2>;

  //we use setState to tell react to keep a check on the specified variable
  //to do necessary changes if changed

  //state is seperated on a per component basis

  //list of value itself and the updating function
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   //makes the componenet function run again
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button>  */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
