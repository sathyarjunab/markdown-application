import { Router } from "express";
import userController from "../../application/services/user-controller.ts";

const route = Router();

route.post("/signup", userController.signup);

route.post("/login", userController.login);

export default route;
