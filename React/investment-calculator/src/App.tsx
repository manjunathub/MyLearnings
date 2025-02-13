import {useState} from "react";
import headerImage from './assets/investment-calculator-logo.png'
import Form from "./components/Form.tsx";
import {calculateInvestmentResults} from "./util/investment.tsx";
import Results from "./components/Results.tsx";

interface invenstmentsObj {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

const investmentObj: invenstmentsObj = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

interface annualDataProps {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
}
function App() {

    // const [investmentResults, setInvetmentResults] = useState([])
    const [investmentResults, setInvestmentResults] = useState<annualDataProps[]>([]);

   /* const [initialInvestment, setInitialInvestment] = useState(0),
        [annualInvestment, setAnnualInvestment] = useState(0),
        [duration, setDuration] = useState(0),
        [expectedReturn, setExpectedReturn] = useState(0);*/
    const changeFieldValues = (key: string, value: number) => {
        investmentObj[key] = value;
        setInvestmentResults(calculateInvestmentResults(investmentObj));

    };
    return (
        <>
            <header className="header">
                <img src={headerImage} alt="logo"/>
                <h1> Investment Calculator</h1>
            </header>
            <main>
                {/*<Form initialInvestment={initialInvestment} annualInvestment={annualInvestment}
                      expectedReturn={expectedReturn} duration={duration} changeFieldValues={changeFieldValues}/>*/}
                <Form initialInvestment={0} annualInvestment={0}
                      expectedReturn={0} duration={0} changeFieldValues={changeFieldValues}/>
                <Results inputData={investmentResults}></Results>
            </main>
        </>
    )
}

export default App
