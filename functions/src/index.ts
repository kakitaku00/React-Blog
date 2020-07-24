import * as functions from "firebase-functions";
import * as express from "express";
// import * as bodyParser from "body-parser";
import * as cors from "cors";
import postsRouter from "./routers/articleRouter";

// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token",
//     "Authorization",
//   ],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   origin: "*",
//   preflightContinue: false,
// };

const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/api/v1", postsRouter);

export const article = functions.region("asia-northeast1").https.onRequest(app);
