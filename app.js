import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginRegister from './components/LoginRegister';
import ConstructorRegister from './components/ConstructorRegister';
import ClientRegister from './components/ClientRegister';
import SkillSelection from './components/SkillSelection';
import TermsAndConditions from './components/TermsAndConditions';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login-or-register" element={<LoginRegister />} />
                    <Route path="/register/constructor" element={<ConstructorRegister />} />
                    <Route path="/register/client" element={<ClientRegister />} />
                    <Route path="/skills" element={<SkillSelection />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
