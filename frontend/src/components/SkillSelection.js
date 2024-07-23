import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkillSelection.css';

const skills = [
    "Фундаментные работы", "Кладочные работы", "Кровельные работы",
    "Установка окон и дверей", "Электромонтажные работы", "Сантехнические работы",
    "Отделочные работы", "Утепление зданий", "Фасадные работы",
    "Монтаж систем вентиляции", "Монтаж отопительных систем", "Монтаж кондиционеров",
    "Установка заборов и ограждений", "Благоустройство территории", "Демонтажные работы",
    "Уборка жилых помещений", "Уборка коммерческих помещений", "Уборка строительных объектов",
    "Малярные работы", "Работы по полам", "Бетонные работы"
];

const SkillSelection = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const navigate = useNavigate();

    const handleSkillToggle = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Выбранные навыки:', selectedSkills);
        navigate('/success');
    };

    return (
        <div className="skill-selection-container">
            <h1>Выбор навыков</h1>
            <form onSubmit={handleSubmit}>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div key={skill} className="skill-item">
                            <input
                                type="checkbox"
                                id={skill}
                                checked={selectedSkills.includes(skill)}
                                onChange={() => handleSkillToggle(skill)}
                            />
                            <label htmlFor={skill}>{skill}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">Продолжить</button>
            </form>
        </div>
    );
};

export default SkillSelection;
