// Install required dependencies: npm install socket.io

const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected.");

  socket.emit("welcome", "Welcome to the chat!");

  socket.on("message", (data) => {
    console.log("Received message:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
