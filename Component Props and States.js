// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentData, setParentData] = useState('Initial Data');

  const updateParentData = newData => {
    setParentData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Parent Data: {parentData}</p>
      <ChildComponent parentData={parentData} updateParentData={updateParentData} />
    </div>
  );
};

export default ParentComponent;
