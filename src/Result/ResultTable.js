import React from "react";
import './ResultTable.css';


const formeter = new Intl.NumberFormat('en-US',{
    style : 'currency',
    currency : "USD",
    minimumFractionDigits :2,
    maximumFractionDigits :2
})

function ResultTable({ data, initialInvestement }) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {data.map((yeardata,index) => {
  return (
    <tr key={index}>
      <td> {yeardata.year}</td>
      <td> { formeter.format(yeardata.savingsEndOfYear)} </td>
      <td>{formeter.format(yeardata.yearlyInterest)} </td>
      <td>
        {" "}
        { formeter.format(yeardata.savingsEndOfYear -
          initialInvestement -
          yeardata.yearlyContribution * yeardata.year)}{" "}
      </td>
      <td>
        {" "}
        {formeter.format(initialInvestement + yeardata.yearlyContribution * yeardata.year)}{" "}
      </td>
    </tr>
  );
})}

        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
