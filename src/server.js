import express from "express";
import { config } from "dotenv";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(serverPort, () => {
    console.log(`🦈 Server On!:${serverPort}`);
});