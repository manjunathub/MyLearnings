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
    // const [isValid, setValidity] = useState(true);

    let isValid: boolean = true;
    if (submitted) {
        isValid = validate(value);
    }


    const handleInputChange = (eve: any) => {
        const value = eve.target.value;
        setValue(value);
    }
    console.log(submitted)
    return (
        <p className="paragraph">
            <Label className="label">{label}</Label>
            <Input
                type={type}
                $isValid={isValid}
                // className={emailNotValid ? 'invalid' : undefined}
                value={value}
                onChange={handleInputChange}
            />
        </p>
    );
}

export default InputWrapper;