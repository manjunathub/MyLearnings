import NumberField from "./NumberField.tsx";

interface userFormProps {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
    changeFieldValues: (key:string, value: number) => void;
}

function Form({initialInvestment, annualInvestment, expectedReturn, duration, changeFieldValues}: userFormProps) {
    return (
        <form className="user-input">
            <div className="input-group">
                <NumberField id={"initialInvestment"} inputValue={initialInvestment} label={"Initial Investment"} changeFieldValues={changeFieldValues} required={true}/>
                <NumberField id={"annualInvestment"} inputValue={annualInvestment} label={"Annual Investment"} changeFieldValues={changeFieldValues} required={true}/>
                {/*<div>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="number" id="initialInvestment" name="initialInvestment" defaultValue={0}
                           value={initialInvestment}/>
                </div>
                <div>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" id="annualInvestment" name="annualInvestment" defaultValue={0}
                           value={annualInvestment}/>
                </div>*/}
            </div>
            <div className="input-group">
                <NumberField id={"expectedReturn"} inputValue={expectedReturn} label={"Expected Return"} changeFieldValues={changeFieldValues} required={true}/>
                <NumberField id={"duration"} inputValue={duration} label={"Duration"} changeFieldValues={changeFieldValues} required={true}/>
                {/*<div>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" id="expectedReturn" name="expectedReturn" defaultValue={0}
                           value={expectedReturns}/>
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" name="duration" defaultValue={0} value={duration}/>
                </div>*/}
            </div>
        </form>
    );
}

export default Form;