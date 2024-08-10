"use client";

import React from 'react';
import Accordion from './AccordionBlock';

function FAQ() {
  const questions = [
    { title: 'Question #1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { title: 'Question #2', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet.' },
    { title: 'Question #3', content: 'Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Proin eget tortor risus.' },
    { title: 'Question #4', content: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.' },
    { title: 'Question #5', content: 'Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
  ];

  return (
    <div className="FAQ">
      {questions.map((question, index) => (
        <Accordion key={index} title={question.title} content={question.content} />
      ))}
    </div>
  );
}

export default FAQ;
