import express from 'express';
import dotenv from 'dotenv';
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './route/webRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import session from 'express-session'


// Lấy đường dẫn của tệp hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

const port = process.env.PORT;
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
configViewEngine(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
