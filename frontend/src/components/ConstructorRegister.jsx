import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructorRegister.css';

const ConstructorRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    // Добавьте здесь логику для отправки данных на сервер
    navigate('/skill-selection'); // Перенаправление на опросник после регистрации
  };

  return (
    <div className="register-container">
      <h1>Register as Constructor</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="User Name" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ConstructorRegister;
