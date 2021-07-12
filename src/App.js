import './App.css';
import { useState }from 'react';

function App() {
 let [soloApplicant, setSolo] = useState(true);
 let [income, setIncome] = useState(0);
 let [partnerIncome, setPartnerIncome] = useState(0);
 let [additionalIncome, setAdditionalIncome] = useState(0);
 let [loans, setLoans] = useState(0);
 let [creditBalance, setCreditBalance] = useState(0);

 let partnerDisplay = soloApplicant ? 'none' : 'inline'

 const calculateTotalIncome = function() { return parseInt(income) + parseInt(partnerIncome) + parseInt(additionalIncome) }
 const calculateTotalLoans = function() { return parseInt(loans) + parseInt(creditBalance)}
 const calculateTotalMortgage = function() { return (calculateTotalIncome() - calculateTotalLoans()) * 5 }

 const handleSoloChange = function(event) { setSolo(!event.target.checked) }

 const handleIncomeChange = function(event) { setIncome(event.target.value) }
 const handleAdditionalChange = function(event) { setAdditionalIncome(event.target.value) }
 const handlePartnerIncomeChange = function(event) { setPartnerIncome(event.target.value) }
 const handleLoanChange = function(event) { setLoans(event.target.value)}
 const handleCreditChange = function(event) { setCreditBalance(event.target.value)}

  return (
    <div class="calculator">
        <div class="detailsForm">
            <div class='switch' style={{display:'inline'}}>
              Two-person application: <input type="checkbox" id="partnerApplicant" onChange={handleSoloChange}></input>
            </div>
            Your income: <Input value={income} onChange={handleIncomeChange}></Input>
            <div style={{display:partnerDisplay}}>
                Your partner's income: <Input value={partnerIncome} onChange={handlePartnerIncomeChange}></Input>
            </div>
            Additional income: <Input value={additionalIncome} onChange={handleAdditionalChange}></Input>
            Outstanding loans: <Input value={loans} onChange={handleLoanChange}></Input>
            Credit card balance: <Input value={creditBalance} onChange={handleCreditChange}></Input>
        </div>
        <div class="resultsDisplay">
            You can borrow: <Display value={calculateTotalMortgage()}></Display>
            Your total income: <Display value={calculateTotalIncome()}></Display>
            Your total loans: <Display value={calculateTotalLoans()}></Display>
        </div>
    </div>
  );
}

function Input(props) {
  return (
      <div>
          $ <input type="number" value={props.value} onChange={props.onChange}></input>
      </div>
  )
}

function Display(props) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  })

  return (
    <div>
        {currencyFormatter.format(props.value)}
    </div>
  )
}

export default App;
