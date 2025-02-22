import {useState} from "react";
import {styled} from "styled-components";


/**
 * Use of props in styled component
 */
const Label = styled.label<{ $isValid?: boolean; }>`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({$isValid}) => ($isValid ? '#6b7280' : '#f87171')};
    text-align: initial;
`;

const Input = styled.input<{ $isValid?: boolean; }>`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${({$isValid}) => ($isValid ? '#d1d5db' : '#fed2d2')};
    color: ${({$isValid}) => ($isValid ? '#374151' : '#ef4444')};
    border: 1px solid ${({$isValid}) => ($isValid ? 'transparent' : '#f73f3f')};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

interface InputWrapperProps {
    label: string;
    type: string;
    validate: (value: string) => boolean;
    submitted: boolean;
}

function InputWrapper({label, type, validate, submitted}: InputWrapperProps) {
    const [value, setValue] = useState('');
    let labelCls = 'block mb-2 text-xs font-bold uppercase tracking-widest text-start',
        inputCls = 'w-full px-3 py-2 leading-tight border rounded shadow';
    // const [isValid, setValidity] = useState(true);

    let isValid: boolean = true;
    if (submitted) {
        isValid = validate(value);
    }

    if(!isValid) {
        labelCls += ' text-red-400';
        inputCls += ' bg-red-100 text-red-500 border-red-300';
    } else {
        labelCls += ' text-stone-200';
        inputCls += ' bg-stone-300 text-gray-700';
    }


    const handleInputChange = (eve: any) => {
        const value = eve.target.value;
        setValue(value);
    }

    return (
        <p className="paragraph">
            <label className={labelCls}>{label}</label>
            <input
                type={type}
                // $isValid={isValid}
                className={inputCls}
                value={value}
                onChange={handleInputChange}
            />
        </p>
    );
}

export default InputWrapper;