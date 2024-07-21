import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="role-selection-container">
            <h1>Select Your Role</h1>
            <button className="role-button" onClick={() => navigate('/register/client')}>Register as Client</button>
            <button className="role-button" onClick={() => navigate('/register/constructor')}>Register as Constructor</button>
        </div>
    );
};

export default RoleSelection;
