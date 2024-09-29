import React from 'react';
import './Income.css';

const Income = () => {
  return (
    <div className="income-container">
      <h2>Income</h2>
      <form className="income-form">
        <input type="text" placeholder="Source" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add Income</button>
      </form>
      <div className="income-list">
        {/* List of income sources */}
      </div>
    </div>
  );
};

export default Income;
