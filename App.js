import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Budgets from './Components/Budgets/Budgets';
import Reports from './Components/Reports/Reports';
import './App.css';  // Optional: App-wide styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Personal Finance Manager</h1>
          <nav>
            <ul>
              <li><Link to="/income">Income</Link></li>
              <li><Link to="/expenses">Expenses</Link></li>
              <li><Link to="/budgets">Budgets</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
