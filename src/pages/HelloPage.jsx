import React, { useEffect, useState } from 'react';
import './HelloPage.css';
import Message from '../assets/message.png';
import { useNavigate } from 'react-router-dom';

const HelloPage = () => {
  const [isLoading,setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
      navigate('/chat');
    },3000);

    return ()=> clearTimeout(timer);
  },[navigate]);

  return (
    <div className="chat-welcome-container">
      {
        isLoading?(
          <div className='loading-spinner'>
            <div className='spinner'></div>
            {/* <p>Loading...</p> */}
          </div>
        ): null
      }
      <div className="chat-welcome-card">
        <div className="chat-welcome-content">
            <img src={Message} alt="Message" className="chat-image" />
          <h1 className="chat-title">Hello</h1>
          <h2 className="chat-subtitle">Chat.</h2>
          <p className="chat-description">
            The last chat app you'll ever need
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelloPage;