import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //using One state instead of three
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });
  const titleChanger = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   //enter all userInput into this object and change the title
    //   //but this might lead to inconsistencies as it depends on previous state
    //   //   ...userInput,
    //   //   enteredTitle: event.target.value,
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChanger = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    setEnteredAmount(event.target.value);
  };
  const dateChanger = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChanger} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChanger}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-10-10'
            onChange={dateChanger}
            value={enteredDate}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
