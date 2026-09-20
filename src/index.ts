import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080});

// event handler
wss.on("connection", function(socket) {
    console.log("A new client has connected.");
    // setInterval(() => {
    //     socket.send("Welcome to the WebSocket server!");
    // }, 500);

    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() === "ping");
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    })
})