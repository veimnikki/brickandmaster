import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import welcomeVideo from '../assets/intro.mp4';

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login-or-register');
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="welcome-container">
            <video className="welcome-video" autoPlay muted>
                <source src={welcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Welcome;
