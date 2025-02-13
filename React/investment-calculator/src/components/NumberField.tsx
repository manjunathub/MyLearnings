import {useState} from "react";

interface NumberFieldProps {
    id: string;
    inputValue: number;
    label: string;
    required: boolean;
    changeFieldValues:(key:string, value: number) => void;
}

function NumberField({inputValue, id, label, changeFieldValues, ...props}: NumberFieldProps) {
    const [inValue, setInValue] = useState(inputValue);
    const onValueChange = (eve:any) => {
        let target:any = eve.target;
        setInValue(+target.value);
        changeFieldValues(target.getAttribute('name'), +target.value);
    }


    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="number" id={id} name={id} onFocus={(eve)=> {eve.target.select()}}
                   value={inValue} {...props} onChange={onValueChange}/>
        </div>
    );
}

export default NumberField;