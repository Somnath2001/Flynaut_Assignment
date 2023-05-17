// Class Component:

import React from "react";

class MyClassComponent extends React.Component {
  render() {
    return <h1>Hello, I'm a class component</h1>;
  }
}

export default MyClassComponent;


// Function Component (with TypeScript):

import React from 'react';

interface MyFunctionComponentProps {
  name: string;
}

const MyFunctionComponent: React.FC<MyFunctionComponentProps> = ({ name }) => {
  return <h1>Hello, {name}! I'm a function component.</h1>;
};

export default MyFunctionComponent;
