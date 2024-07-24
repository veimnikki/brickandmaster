import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkillSelection.css';

const SkillSelection = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const skills = [
    'Painting',
    'Plumbing',
    'Electrical Work',
    'Carpentry',
    'Masonry',
    'Landscaping',
    'Roofing',
    'Cleaning',
    'Commercial Cleaning',
    'Residential Cleaning',
    'Construction Cleanup'
    // Добавьте сюда больше навыков по необходимости
  ];

  const handleSkillChange = (skill) => {
    setSelectedSkills(prevState =>
      prevState.includes(skill)
        ? prevState.filter(s => s !== skill)
        : [...prevState, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected skills:', selectedSkills);
    // Добавьте здесь логику для отправки выбранных навыков на сервер
    navigate('/email-confirmation'); // Перенаправление на страницу подтверждения email
  };

  return (
    <div className="skill-selection-container">
      <h1>Выбор навыков</h1>
      <form onSubmit={handleSubmit}>
        <div className="skills-list">
          {skills.map(skill => (
            <div key={skill} className="skill-item">
              <label>
                <input
                  type="checkbox"
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />
                {skill}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SkillSelection;
