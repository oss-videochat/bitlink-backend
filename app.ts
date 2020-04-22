import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./node_modules/video-web-app-frontend/build'));


app.all(['/join/*', '/create'], ((req, res, next) => {
    res.sendFile('./node_modules/video-web-app-frontend/build/index.html');
}));

export default app;
