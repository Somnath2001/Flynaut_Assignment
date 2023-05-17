import React, { useRef } from "react";

const MyComponent = () => {
  const divRef = useRef(null);

  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  return (
    <div ref={divRef} style={{ height: "300px", overflow: "auto" }}>
      <p>Content...</p>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default MyComponent;
