import express from 'express';
import Routes from "./Routes";
import cors from 'cors';


const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json())

Routes(app);

export = app