import { useState } from "react";
import Header from "./Header/Header";
import ResultTable from "./Result/ResultTable";
import UserInput from "./UserInput/UserInput";

function App() {

  const [userInput, setuserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setuserInput(userInput);   
    
  };
  const yearlyData = []; 

  if(userInput){
    let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
      
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  }

  return (
    <div>
      <Header /> 
      <UserInput onCalculate = {calculateHandler} />
         {!userInput && <p style={{textAlign:'center'}}>not calculted yet</p>}
     {userInput && <ResultTable  data={yearlyData} initialInvestement={userInput['current-savings']}/>} 
    </div>
  );
}

export default App;
