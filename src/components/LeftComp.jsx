import React from 'react';
import './App.css';
import img from '../assets/photo.jpg'

const LeftComp = () => {
  return (
    <div className="left">
      <div className="description">
        <div className="logo">
          <div className="logo-circle">
            <span>Base</span>
          </div>
        </div>
        <h1>Generate detailed reports with just one click</h1>
        <img src={img} alt="Person" className="person-image" />
      </div>
    </div>
  );
};

export default LeftComp;
