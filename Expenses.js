import React from 'react';
import './Expenses.css';

const Expenses = () => {
  return (
    <div className="expenses-container">
      <h2>Expenses</h2>
      <form className="expenses-form">
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add Expense</button>
      </form>
      <div className="expenses-list">
        {/* List of expenses */}
      </div>
    </div>
  );
};

export default Expenses;
