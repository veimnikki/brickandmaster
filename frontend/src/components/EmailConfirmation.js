import React from 'react';
import './EmailConfirmation.css';

const EmailConfirmation = () => {
    return (
        <div className="container">
            <div className="email-confirmation-box">
                <h2>Email Confirmation</h2>
                <p>We have sent a confirmation link to your email address. Please check your inbox and click the link to confirm your email.</p>
                <button className="submit-button">Resend Email</button>
            </div>
        </div>
    );
}

export default EmailConfirmation;
