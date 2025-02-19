import {useState} from 'react';
import './Authinput.css';
import Button from "./Button.tsx";
import InputWrapper from "./InputWrapper.tsx";

function AuthInputs() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    /*function handleInputChange(identifier: string, value: any) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }*/

    function handleLogin() {
        setSubmitted(true);
    }

    // const emailNotValid = submitted && !enteredEmail.includes('@');
    // const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs">
            <div className="controls">
                {/*<p className="paragraph">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className={emailNotValid ? 'invalid' : undefined}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        className={passwordNotValid ? 'invalid' : undefined}
                        onChange={(event) =>
                            handleInputChange('password', event.target.value)
                        }
                    />
                </p>*/}
                <InputWrapper label="Email" type="email" validate={(value: string) => value.includes('@')}
                              submitted={submitted}/>
                <InputWrapper label="Password" type="password" validate={(value: string) => value.length > 6}
                              submitted={submitted}/>
            </div>
            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}

export default AuthInputs;