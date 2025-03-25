const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("send_message", (msg) => {
    console.log("Message from client:", msg);
    io.emit("receive_message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

http.listen(5173, () => {
  console.log(`Server running on port 5173`);
});
