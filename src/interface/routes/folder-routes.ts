import { Router, Request, Response } from "express";
import folderService from "../../application/services/container-services.ts";
import { JwtTokenVerify } from "../../application/utils/token.ts";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const route = Router();

route.use((req, res, next) => {
  const payLoad = JwtTokenVerify(req.headers.authorization);
  if (!payLoad) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  req.user = payLoad;
  next();
});

route.post("/container", folderService.createContainer);

export default route;
