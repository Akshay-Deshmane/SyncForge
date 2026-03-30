import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO} from "y-socket.io/dist/server";



const app = express();
const httpServer = createServer(app);



httpServer.listen(3000, ()=> {
    console.log("server is started successfully");
})

