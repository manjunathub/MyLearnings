import {formatter} from "../util/investment.tsx";

interface annualDataProps {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
}

interface ResultsProps {
    inputData?: annualDataProps[]
}

function Results({inputData}: ResultsProps) {

    const getResults = () => {
        if (inputData && inputData.length > 0) {
            const initialInvestment: number = inputData[0].valueEndOfYear - inputData[0].interest - inputData[0].annualInvestment;
            const rowItems = inputData.map((item) => {
                const totalInterest: number = item.valueEndOfYear - (item.annualInvestment * item.year) - initialInvestment;
                const totalInvestedAmount: number = item.valueEndOfYear - totalInterest;
                return (
                    <tr>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestedAmount)}</td>
                    </tr>
                );
            });
            return (
                <table className="result">
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Initial Investment</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rowItems}
                    </tbody>
                </table>
            );

        } else {
            return <h1 className="center"> Please enter valid data </h1>
        }
    }

    return (
        <div>
            {
                getResults()
            }
        </div>
    );
}

export default Results;