import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { TiEyeOutline } from "react-icons/ti";
import { IoFingerPrintSharp } from "react-icons/io5";
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import pinterest from '../assets/pinterest.png';
import linkedin from '../assets/linkedin.png';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin=(e)=>{
    e.preventDefault();

    if(!email || !password){
      setError('Please fill in both email id and password');
      return 
    }

    setError("");

    navigate('/home');
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      
      <div className="terms-box">
        <p>By signing in you are agreeing our <span className="highlight">Term</span> and <span className="highlight">privacy policy</span></p>
      </div>
      
      <div className="tab-container">
        <button className="tab active">Login</button>
        <button className="tab">Register</button>
      </div>
      
      <form className="login-form">
      {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <IoMail className="input-icon" />
          <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <TiEyeOutline className="input-icon right" />
        </div>
        <br /> 
        
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />&nbsp;
            Remember password
          </label>
          <a href="#" className="forgot-link">Forgot password</a>
        </div>
        <br />
        
        <button type="button" onClick={handleLogin} className="login-button">Login</button>
        
      </form>
      
      <p className="or-connect">or connect with</p>
      
      <div className="social-login">
        <button>
          <img className='social-btn' src={facebook} alt="facebook" />
        </button>
        <button>
        <img className='social-btn' src={instagram} alt="facebook" />
        </button>
        <button>
        <img className='social-btn' src={pinterest} alt="facebook" />
        </button>
        <button>
        <img className='social-btn' src={linkedin} alt="facebook" />
        </button>
      </div>
      
      <div className="fingerprint-container">
        <div className="fingerprint-icon">
          {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg> */}
          <IoFingerPrintSharp />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;