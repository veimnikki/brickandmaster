import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    const handleAgree = () => {
        navigate('/skills');
    };

    return (
        <div className="terms-container">
            <h1>Соглашение</h1>
            <p>Авторские права и соглашение...</p>
            <p>Вы должны согласиться с тем, что вы готовы купить форму с нашим логотипом, представлять нашу компанию и отвечать за работу.</p>
            <button onClick={handleAgree}>Я согласен</button>
        </div>
    );
};

export default TermsAndConditions;
