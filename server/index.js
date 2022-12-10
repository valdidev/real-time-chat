import express from 'express';
import morgan from 'morgan';
import { Server as SockerServer } from 'socket.io';
import http from 'http';
import cors from 'cors';
import { PORT } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new SockerServer(server, {
    cors: {
        origin: '*'
    }
});

app.use(cors());
app.use(morgan('dev'));

io.on('connection', (socket) => {
    console.log(socket.id)
    console.log('a user connected');
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));