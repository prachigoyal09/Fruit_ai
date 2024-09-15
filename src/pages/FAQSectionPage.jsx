import React from 'react';
import './FAQSectionPage.css';
import tangerine from '../assets/tangerine.png'

const faqData = [
  {
    question: "How is Tangerine healthy?",
    answer: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
  {
    question: "How is Tangerine healthy?",
    answer: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
  {
    question: "How is Tangerine healthy?",
    answer: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
  {
    question: "How is Tangerine healthy?",
    answer: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
];

const FAQSectionPage = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FaQ Section</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-image">
              <img src={tangerine} alt="Tangerine" />
              <span className="image-label">Tangerine</span>
            </div>
            <div className="faq-content">
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionPage;