import React, { useState } from "react";
import { Link} from 'react-router-dom';

import "./Menu_Bar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCalendarDays, faBell, faGear, faFileInvoice, faCubesStacked, faFileLines, faArrowLeft, faArrowRight, faSun, faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ theme, onThemeToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`menubar ${theme} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="menubar-logo">
       <p>{!isCollapsed && "Base"}</p>
      </div>
      <button onClick={handleToggle} className="theme-toggle-button">
        <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} className="icon" />
        <p>{!isCollapsed && 'Collapse'}</p>
      </button>
      <ul className="menubar-menu">
        <li className="menubar-item">
          <FontAwesomeIcon icon={faCubesStacked} className="icon" />
          <p>{!isCollapsed && 'Dashboard'}</p>
        </li>
        <li className="menubar-item active">
          <FontAwesomeIcon icon={faChartSimple} className="icon" />
          <p>{!isCollapsed && 'Upload'}</p>
        </li>
        <li className="menubar-item">
          <FontAwesomeIcon icon={faFileInvoice} className="icon" />
          <p>{!isCollapsed && 'Invoice'}</p>
        </li>
        <li className="menubar-item">
          <FontAwesomeIcon icon={faFileLines} className="icon" />
          <p>{!isCollapsed && 'Schedule'}</p>
        </li>
        <li className="menubar-item">
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <p>{!isCollapsed && 'Calendar'}</p>
        </li>
        <li className="menubar-item">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <p>{!isCollapsed && 'Notification'}</p>
        </li>
        <li className="menubar-item">
          <FontAwesomeIcon icon={faGear} className="icon" />
          <p>{!isCollapsed && 'Settings'}</p>
        </li>
      </ul>
      <button onClick={onThemeToggle} className="theme-toggle-button">
        <FontAwesomeIcon icon={theme === 'dark-theme' ? faSun : faMoon} className="icon" />
        <p>{!isCollapsed && (theme === 'dark-theme' ? 'Light Theme' : 'Dark Theme')}</p>
      </button>
      <Link to='/'>
      <button className="theme-toggle-button">
        <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
        <p>{!isCollapsed && 'Log Out'}</p>
      </button>
      </Link>
    </div>
  );
};

export default Menu;
