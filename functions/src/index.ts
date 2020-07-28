import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import postsRouter from "./routers/articleRouter";

const app = express();
app.use(cors());

app.use("/api/v1", postsRouter);

export const blog = functions.region("asia-northeast1").https.onRequest(app);
