import UserInput from './components/UserInput.jsx';
import InvestmentResults from './components/InvestmentResults.jsx';
import {useState} from 'react';
function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleOnChange(event) {
    const {id, value} = event.target;
    //console.log(id, value,event.target);
    setInvestmentData((prevData) => {
     // console.log("prevData:", { ...prevData,[id]: value});
      return { ...prevData,[id]: Number(value)};
  });
  }
  return (
    <>
      <header id="header">
        <img src="/investment-calculator-logo.png" alt="Investment calculator logo" />
        <h1>React Investment Calculator</h1>
      </header>
      <UserInput investmentData={investmentData} handleOnChangeEvent={handleOnChange}/>
      <InvestmentResults investmentData={investmentData} />
    </>
  );
}

export default App;
