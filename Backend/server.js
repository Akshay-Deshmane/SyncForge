import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";



const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors : {
        origin : "*",
        methods : ["GET", "POST"]
    }
});

const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();


// health ckeck route to check is server is running correct or not 
app.get("/", (req, res) => {
    return res.status(200).json({
        message : "server is started successfully",
        success : true
    })
});


app.get("/health", (req, res) => {
    return res.status(200).json({
        message : "ok",
        success : true
    })
});


httpServer.listen(3000, ()=> {
    console.log("server is started successfully");
})

