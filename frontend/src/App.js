import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginRegister from './components/LoginRegister';
import ClientRegister from './components/ClientRegister';
import ConstructorRegister from './components/ConstructorRegister';
import EmailConfirmation from './components/EmailConfirmation';
import SkillSelection from './components/SkillSelection';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login-or-register" element={<LoginRegister />} />
                    <Route path="/register/client" element={<ClientRegister />} />
                    <Route path="/register/constructor" element={<ConstructorRegister />} />
                    <Route path="/email-confirmation" element={<EmailConfirmation />} />
                    <Route path="/select-skills" element={<SkillSelection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
