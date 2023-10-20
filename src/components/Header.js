import React from 'react';
import './header.css';
import headerImage from './me.jpg'; 

function Header() {
  return (
    <header className="header">
      
    
    <div className="header-content">
        <img src="p1.jpg" alt="Header Image" className="header-image" />
        <h1 className="header-name">Konduru Praveen Kumar </h1>
      </div>
      <h3 >I am third year senior at vellore institute of technology(VIT) in Amaravathi <br/>
        ,Currently pursuing 
        CSE Core
        Enjoys reading Books,browsing internet,playing Games.<br/>
        I am a self motivating ,Honest and Straight forward person.

      </h3>
    </header>
  );
}

export default Header;


