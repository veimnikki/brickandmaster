import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailConfirmation.css';

const EmailConfirmation = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate('/select-skills');
    };

    return (
        <div className="confirmation-container">
            <h1>Подтверждение почты</h1>
            <p>Пожалуйста, проверьте свою электронную почту и подтвердите регистрацию.</p>
            <button onClick={handleConfirm}>Я подтвердил почту</button>
        </div>
    );
};

export default EmailConfirmation;
