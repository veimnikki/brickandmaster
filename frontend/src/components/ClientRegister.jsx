// src/components/ClientRegister.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientRegister.css';

const ClientRegister = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Здесь должна быть логика регистрации пользователя
        // После успешной регистрации перенаправляем на страницу подтверждения почты
        navigate('/email-confirmation');
    };

    return (
        <div className="register-container">
            <h1>Регистрация клиента</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ClientRegister;
