import { calculateInvestmentResults, formatter } from '../util/investment.js';

function InvestmentResults({ investmentData }) {
  //console.log("investmentData:", investmentData);
  const results = calculateInvestmentResults(investmentData);
  //console.log("results:", results);

  if (results.length === 0) {
    return <p className="center">Enter a duration greater than zero to see results.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            investmentData.initialInvestment;
          const investedCapital = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvestmentResults;
