"use client";

import React, { useState } from 'react';
import Image from 'next/image';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-header_title">{title}</h3>
        <Image
            src="/icons/arrow-icon_lg.png"
            width={24} // Set this to the actual width of the image in pixels
            height={24} // Set this to the actual height of the image in pixels
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
