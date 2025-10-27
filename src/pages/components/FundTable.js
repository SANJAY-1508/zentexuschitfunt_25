// FundTable.jsx - Modern table design
import React from "react";

const FundTable = ({ data }) => {
  return (
    <table className="fund-table w-100">
      <thead>
        <tr>
          <th className="py-3 px-2 text-start fw-bold text-gold">Plan</th>
          <th className="py-3 px-2 text-center fw-bold text-gold">
            Installments + Bonus
          </th>
          <th className="py-3 px-2 text-end fw-bold text-gold">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="fund-row">
            <td className="py-3 px-2 fw-medium">{row.plan}</td>
            <td className="py-3 px-2 text-center opacity-90">{row.total}</td>
            <td className="py-3 px-2 text-end fw-bold text-gold">
              ₹{row.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FundTable;
