function UserInput({ investmentData,handleOnChangeEvent }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input id="initialInvestment" type="number" value={investmentData.initialInvestment} onChange={handleOnChangeEvent}/>
        </p> 
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input id="annualInvestment" type="number" value={investmentData.annualInvestment} onChange={handleOnChangeEvent} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input id="expectedReturn" type="number" value={investmentData.expectedReturn} onChange={handleOnChangeEvent} />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" value={investmentData.duration} onChange={handleOnChangeEvent} />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
