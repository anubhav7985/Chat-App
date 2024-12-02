const { Server } = require('socket.io')
const http = require('http')
const express = require('express')


const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

const userSocketMap = {};

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

io.on("connection", (socket) => {
    console.log('a user connected', socket.id)

    //A socket handshake is the initial exchange of information that occurs 
    //between a client and a server to establish a connection in a network 
    //communication, especially when using protocols like WebSockets or TCP.

    //WebSocket Handshake: Used to upgrade an HTTP connection to a WebSocket 
    //connection for full-duplex communication.
    const userId = socket.handshake.query.userId
    if (userId != "undefined")
        userSocketMap[userId] = socket.id

    //socket.emit(): Emits the event to only the connected client associated 
    //with that specific socket

    //io.emit() is a method used on the server-side to broadcast a message or event 
    //to all connected clients.

    //io.emit() is used to send events to all the connected clients 
    //Systex: io.emit(eventName, data)
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    //Socket.IO simplifies real-time, bidirectional communication between servers and clients.
    //It provides features such as event - driven messaging, broadcasting, namespaces, and rooms.
    //It automatically handles reconnections and supports fallback mechanisms 
    //when WebSockets aren't available.

    //socket.on() is used to listen to events, can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id)

        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})
module.exports = { app, io, server, getReceiverSocketId };

