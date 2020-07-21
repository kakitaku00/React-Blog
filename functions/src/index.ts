import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import postsRouter from "./routers/posts";

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
};

const app = express();
app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", postsRouter);

export const posts = functions.region("asia-northeast1").https.onRequest(app);
