import React, { useState } from 'react'
import BackButton from '../BackButton'
import './Styles/IntrestCalculator.css'
function InterestCalculator() {
  const [loanAmount, setLoanAmount] = useState(0)
  const [loanTerm, setLoanTerm] = useState(6)
  const [interestRate, setInterestRate] = useState(5)

  const ComputeInterest = (loanAmount, loanTerm, interestRate) => {
    const interest =
      parseFloat(loanAmount) *
      parseFloat(loanTerm) *
      (parseFloat(interestRate) / 100)
    return interest.toFixed(2)
  }
const ResetValues = () => {
    setLoanAmount(0);
    setLoanTerm(6);
    setInterestRate(5);
}

  return (
    <div>
      <BackButton />
      <h1 className='ic-title'>Interest calculator</h1>
      <p className='country'>United states</p>
      <hr></hr>
      <h4>Calculator</h4>
      <form>
        <div className='userInput'>
          <label htmlFor='loanAmount'>Loan amount ($)</label>
          <input
            className='calcInput'
            type='text'
            id='loanAmount'
            name='loanAmount'
            placeholder='0'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className='userInput'>
          <label htmlFor='loanTerm'>Loan term</label>
          <select
            className='calcInput'
            id='loanTerm'
            name='loanTerm'
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}>
            <option value='6'>6 months</option>
            <option value='12'>12 months</option>
            <option value='18'>18 months</option>
            <option value='24'>2 years</option>
            <option value='60'>5 years</option>
            <option value='120'>10 years</option>
          </select>
        </div>

        <div className='userInput'>
          <label htmlFor='interestRate'>Interest (%)</label>
          <input
            className='calcInput'
            type='number'
            id='interestRate'
            name='interestRate'
            placeholder='0'
            step='0.01'
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <br></br>
      </form>
      <button className='reset-button' onClick={ResetValues}>Reset values</button>
      <br></br>
      <hr></hr>
      <div>
        Total interest in {loanTerm} months is:{' '}
        <span className='result-digit'>
          ${ComputeInterest(loanAmount, loanTerm, interestRate)}
        </span>
      </div>
    </div>
  )
}

export default InterestCalculator
