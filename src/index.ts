import express from "express";
import dotenv from "dotenv";
import userRoutes from "./interface/routes/user-routes.ts";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import folderRoute from "./interface/routes/folder-routes.ts";

dotenv.config();

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(cookieParser());

  app.use(bodyParser.urlencoded());

  // parse application/json
  app.use(bodyParser.json());
  app.use("/user", userRoutes);
  app.use("/manupulate", folderRoute);
  return app;
}
