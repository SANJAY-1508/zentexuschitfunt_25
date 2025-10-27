import React from "react";

const FundTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="fund-table w-100">
        <thead>
          <tr>
            <th className="py-3 px-3 text-start fw-bold text-white">Plan</th>
            <th className="py-3 px-3 text-center fw-bold text-white">
              Installments + Bonus
            </th>
            <th className="py-3 px-3 text-end fw-bold text-white">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="fund-row">
              <td className="py-3 px-3 fw-medium text-dark">{row.plan}</td>
              <td className="py-3 px-3 text-center opacity-90 text-dark">
                {row.total}
              </td>
              <td className="py-3 px-3 text-end fw-bold text-gold">
                ₹{row.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundTable;
