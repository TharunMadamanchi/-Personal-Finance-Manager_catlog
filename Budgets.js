import React from 'react';
import './Budgets.css';

const Budgets = () => {
  return (
    <div className="budgets-container">
      <h2>Budgets</h2>
      <form className="budgets-form">
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Budget Amount" />
        <button type="submit">Set Budget</button>
      </form>
      <div className="budgets-list">
        {/* List of budgets by category */}
      </div>
    </div>
  );
};

export default Budgets;
