import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-header_title">{title}</h3>
        <img
            src="/icons/arrow-icon_lg.png"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
            alt="Arrow Icon"
        />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <h4 className="accordion-content-title">Question Title</h4>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
