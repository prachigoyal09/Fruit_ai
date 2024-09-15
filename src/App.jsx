import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FAQSectionPage from './pages/FAQSectionPage'
import AboutPage from './pages/AboutPage'
import HelloPage from './pages/HelloPage';
import ChatPage from './pages/ChatPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/faqs' element={<FAQSectionPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/hello' element={<HelloPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;