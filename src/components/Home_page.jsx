import React, { useState } from 'react';
import Upload from './Upload';
import './App.css';
import Menu from './Menu_Bar';

const Home = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  return (
    <div className={`app ${theme}`}>
      <Menu className="menu-bar" theme={theme} onThemeToggle={toggleTheme} />
      <div className='content'>
      
      <Upload theme={theme} />
      </div>
    </div>
  );
};

export default Home;

