import React from "react";

const FundTable = ({ data }) => {
  return (
    <table className="fund-table">
      <thead>
        <tr>
          <th>PLAN</th>
          <th>TOTAL INSTALLMENTS + BONUS</th>
          <th>TOTAL AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.plan}</td>
            <td>{row.total}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FundTable;
