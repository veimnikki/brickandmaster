import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Добро пожаловать в ConstructionApp</h1>
                <p>Все виды строительных работ и уборок</p>
                <div className="home-buttons">
                    <button>Стать заказчиком</button>
                    <button>Стать исполнителем</button>
                </div>
            </header>
            <section className="home-info">
                <h2>Преимущества использования нашего приложения</h2>
                <p>Здесь можно рассказать о преимуществах...</p>
                <h2>Отзывы пользователей</h2>
                <p>Здесь можно добавить отзывы...</p>
            </section>
        </div>
    );
}

export default Home;