'use client';
import { useState } from 'react';

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const chevronClass = `h-6 w-6 transform transition-transform duration-300 ${
    isExpanded ? 'rotate-180' : ''
  }`;

  return (
    <div className="border border-gray-300 rounded-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <div />
      </div>
      {isExpanded && (
        <div
          className="p-4 border-t border-gray-300"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
}
export default Accordion;
