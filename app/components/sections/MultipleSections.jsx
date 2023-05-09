'use client';
import { useState } from 'react';
import AddSection from './AddSection';
// import AddSection from './AddSection';

const MultipleSections = () => {
  const [sections, setSections] = useState([]);

  const addSection = () => {
    setSections([...sections, <AddSection />]);
  };

  return (
    <div>
      {sections}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
};

export default MultipleSections;
