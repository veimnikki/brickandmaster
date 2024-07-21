import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">ConstructionApp</div>
            <ul className="navbar-links">
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#contact">Контакты</a></li>
                <li><a href="#register">Регистрация</a></li>
                <li><a href="#login">Вход</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;