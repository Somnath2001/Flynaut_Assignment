// Parent Component:

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [data, setData] = useState("");

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <ChildComponent onDataChange={handleDataChange} />
      <p>Data from child component: {data}</p>
    </div>
  );
};

export default ParentComponent;

// Child Component:

import React from 'react';

const ChildComponent = ({ onDataChange }) => {
  const sendDataToParent = () => {
    const newData = 'Hello from child component';
    onDataChange(newData);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data</button>
    </div>
  );
};

export default ChildComponent;
