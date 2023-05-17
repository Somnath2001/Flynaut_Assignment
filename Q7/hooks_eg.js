import React, { useState, useEffect, useCallback, useContext } from "react";

// useState example
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// useEffect example
const MyComponent = () => {
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <h1>Hello, useEffect example!</h1>;
};

// useCallback example
const MyComponent = () => {
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};

// useContext example
const MyContext = React.createContext("");

const MyComponent = () => {
  const value = useContext(MyContext);

  return <p>Context value: {value}</p>;
};
