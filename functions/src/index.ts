import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";

import postsRouter from "./routers/posts";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", postsRouter);

export const posts = functions.region("asia-northeast1").https.onRequest(app);
