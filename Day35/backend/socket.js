let io;

function init(server) {
  io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("Client Connected :", socket.id);

    socket.on("disconnect", () => {
      console.log("Client Disconnected :", socket.id);
    });
  });

  return io;
}

function getIO() {
  return io;
}

module.exports = {
  init,
  getIO
};