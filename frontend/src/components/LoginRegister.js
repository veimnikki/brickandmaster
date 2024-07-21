import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';

const LoginRegister = () => {
    const [step, setStep] = useState('login'); // 'login', 'roleSelection', 'registerClient', 'registerConstructor'
    const navigate = useNavigate();

    const renderForm = () => {
        switch (step) {
            case 'login':
                return (
                    <form className="login-form">
                        <input type="text" placeholder="User Name" />
                        <input type="password" placeholder="Enter Password" />
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember Password</label>
                        </div>
                        <button type="submit" className="submit-button">Log in</button>
                        <button type="button" className="google-button">Log in with Google</button>
                        <p className="forgot-password-link">Forgot Password?</p>
                        <button 
                            type="button" 
                            className="register-switch-button"
                            onClick={() => setStep('roleSelection')}
                        >
                            Register
                        </button>
                    </form>
                );
            case 'roleSelection':
                return (
                    <div className="role-selection">
                        <button 
                            type="button" 
                            className="role-button"
                            onClick={() => setStep('registerClient')}
                        >
                            Register as Client
                        </button>
                        <button 
                            type="button" 
                            className="role-button"
                            onClick={() => setStep('registerConstructor')}
                        >
                            Register as Constructor
                        </button>
                        <button 
                            type="button" 
                            className="back-button"
                            onClick={() => setStep('login')}
                        >
                            Back
                        </button>
                    </div>
                );
            case 'registerClient':
                return (
                    <form className="register-form">
                        <input type="text" placeholder="User Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit" className="submit-button">Register as Client</button>
                        <button 
                            type="button" 
                            className="back-button"
                            onClick={() => setStep('roleSelection')}
                        >
                            Back
                        </button>
                    </form>
                );
            case 'registerConstructor':
                return (
                    <form className="register-form">
                        <input type="text" placeholder="User Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit" className="submit-button">Register as Constructor</button>
                        <button 
                            type="button" 
                            className="back-button"
                            onClick={() => setStep('roleSelection')}
                        >
                            Back
                        </button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="login-register-box">
                <h1>Welcome</h1>
                {renderForm()}
            </div>
        </div>
    );
}

export default LoginRegister;