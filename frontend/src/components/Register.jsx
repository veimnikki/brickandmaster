import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Логика регистрации здесь
        console.log('User registered:', { userName, email, password });
        navigate('/login');
    };

    const handleGoogleRegister = () => {
        // Логика регистрации через Google здесь
        console.log('User registered with Google');
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="User Name" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="submit-button">Register</button>
                </form>
                <button onClick={handleGoogleRegister} className="google-button">Register with Google</button>
                <p className="login-link" onClick={() => navigate('/login')}>Already have an account? Log in</p>
            </div>
        </div>
    );
};

export default Register;

