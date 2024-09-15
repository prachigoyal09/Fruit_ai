import React from 'react';
// import { ArrowLeft, MoreVertical, Paperclip, Send } from 'lucide-react';
import './ChatPage.css';
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiPaperclip } from "react-icons/fi";

const ChatPage = () => {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <IoIosArrowBack className="header-icon" />
        <div className="user-info">
          <img src="/api/placeholder/30/30" alt="John Doe" className="user-avatar" />
          <span className="user-name">John Doe</span>
        </div>
        <IoMdMore className="header-icon" />
      </header>
      
      <div className="chat-messages">
        <div className="message-date">20 October, Sunday</div>
        
        <div className="message received">
          This is a sample big message with a longer text paragraph
        </div>
        
        <div className="message sent">
          This is a sample big message with a longer text paragraph
        </div>
        
        <div className="product-card">
          <img src="/api/placeholder/50/50" alt="Orange" className="product-image" />
          <div className="product-info">
            <span className="product-name">Orange</span>
            <span className="product-price">$8.00</span>
          </div>
          <div className="product-quantity">
            <span className="quantity-icon">2</span>
            <span className="total-price">$16.00</span>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/api/placeholder/50/50" alt="Cucumber" className="product-image" />
          <div className="product-info">
            <span className="product-name">Cucumber</span>
            <span className="product-price">$11.76</span>
          </div>
          <div className="product-quantity">
            <span className="quantity-icon">1</span>
            <span className="total-price">$11.76</span>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/api/placeholder/50/50" alt="Tangerine" className="product-image" />
          <div className="product-info">
            <span className="product-name">Tangerine</span>
            <span className="product-price">$6.46</span>
          </div>
          <div className="product-quantity">
            <span className="quantity-icon">4</span>
            <span className="total-price">$25.85</span>
          </div>
        </div>
        
        <div className="message sent">
          This is a sample message for a chat
        </div>
        
        <div className="message received">
          This is a sample message for a chat
        </div>
      </div>
      
      <div className="message-input">
        <FiPaperclip className="input-icon" />
        <input type="text" placeholder="Message..." />
        {/* <RiSendPlane2Line className="send-icon" /> */}
      </div>
    </div>
  );
};

export default ChatPage;