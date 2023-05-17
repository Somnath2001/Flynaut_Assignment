import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

const MyComponent = () => {
  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Hello, Socket.IO connectivity!</h1>;
};

export default MyComponent;
