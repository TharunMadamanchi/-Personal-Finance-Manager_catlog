import React from 'react';
import './Reports.css';

const Reports = () => {
  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <div className="report-options">
        <button>Monthly Report</button>
        <button>Annual Report</button>
      </div>
      <div className="report-display">
        {/* Display generated report */}
      </div>
    </div>
  );
};

export default Reports;
