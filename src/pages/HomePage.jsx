import React from 'react';
import './HomePage.css';
import translate from '../assets/translate.png'
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleChat=(e)=>{
    e.preventDefault();

    navigate('/hello')
  }

  const handleAbout=(e)=>{
    e.preventDefault();

    navigate('/about');
  }

  const handleFaqs=(e)=>{
    e.preventDefault();

    navigate('/faqs');
  }

  return (
    <div className="fruit-ai-container">
      <div className="content">
        <h1 className="title">Fruit.Ai</h1>
        <p className="subtitle">"Be Healthy!"</p>
        
        <div className="button-grid">
          
          <button onClick={handleChat} className="app-button chat">Chat.</button>
          
          {/* <button className="app-button"></button>  */}
          <button className="app-button1"></button>
          <button className="app-button2"></button>
          <button className="app-button translate">
          <img src={translate} alt="translate" />
          </button>
          
          <button onClick={handleFaqs} className="app-button faqs">FAQs</button>
    
          <button onClick={handleAbout} className="app-button about">About</button>
        </div>
        
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;