import Layout from "./components/Layout"
import NumericInput from "./components/NumericInput"
import SliderInput from "./components/SliderInput"
import CalculateButton from "./components/CalculateButton"
import CalculatedAmounts from "./components/CalculatedAmounts"
import React, { useState } from 'react'


function App() {
  const [initAmount, setInitAmount] = useState(0)
  const [monthlyContribution, setMonthlyContribution] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [numberOfYears, setNumberOfYears] = useState(0)
  const [finalValue, setFinalValue] = useState(null)

function calculateCompoundInterest() {
  let total = parseInt(initAmount)
  let annualContribution = parseInt(monthlyContribution) * 12
  for (let i = 0; i< parseInt(numberOfYears); i++) {
    total += annualContribution
    total *= 1 + parseInt(interestRate) /100 
  }
  setFinalValue(total)
}
function reset() {
  setInitAmount(0)
  setMonthlyContribution(0)
  setInterestRate(0)
  setFinalValue(null)
  setNumberOfYears(0)
}

  return(
    <Layout>
    {finalValue ? (
      <CalculatedAmounts finalValue={finalValue} numberOfYears={numberOfYears} monthlyContribution={monthlyContribution} reset={reset} initAmount={initAmount}
      />
    ) : (
      
    <>
      <NumericInput title={'Initial Amount'} symbol={'$'} value={initAmount} setValue={setInitAmount} />
      <NumericInput title={'Monthly Contribution'} symbol={'$'} value={monthlyContribution} setValue={setMonthlyContribution} />
      <NumericInput title={'Interest Rate'} symbol={'%'} value={interestRate} setValue={setInterestRate} />        
      <SliderInput title={'Number of Years'} value={numberOfYears} setValue={setNumberOfYears} />
      <CalculateButton evaluate= {calculateCompoundInterest}/> 
      </>
      )}
    </Layout>
    
  )
}

export default App