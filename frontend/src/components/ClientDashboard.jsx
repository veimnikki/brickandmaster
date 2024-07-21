import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructorRegister.css';

const ConstructorRegister = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/skills');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Register as Constructor</h1>
                <form className="register-form" onSubmit={handleRegister}>
                    <input type="text" placeholder="User Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit" className="submit-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default ConstructorRegister;
