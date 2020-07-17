import express from "express";
import {
  createProxyMiddleware,
  // Filter,
  // Options,
  // RequestHandler,
} from "http-proxy-middleware";
import crypto from "crypto";
// import bodyParser from "body-parser";
import cors from "cors";
import "./lib";

const ts: number = new Date().getTime();
const data = `${ts}${process.env.PRIVATE_KEY}${process.env.PUB_KEY}`;
const hash: string = crypto.createHash("md5").update(data).digest("hex");

const app = express();

const options = {
  target: "http://gateway.marvel.com/v1/public",
  changeOrigin: true,
  pathRewrite: (path: string) => {
    const auth = `?ts=${ts}&apikey=${process.env.PUB_KEY}&hash=${hash}`;

    const newPath: string | undefined =
      path
        .split(/^\/api/)
        .pop()
        ?.concat(auth) || path;

    return newPath;
  },
};

app.use(cors());
app.use("/api", createProxyMiddleware(options));
app.listen(8000);
