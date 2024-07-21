// src/components/ConstructorRegister.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructorRegister.css';

const ConstructorRegister = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/select-skills');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Register as Constructor</h1>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="User Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default ConstructorRegister;
