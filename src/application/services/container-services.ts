import { Request, Response } from "express";
import {
  fileValidator,
  folderValidator,
  typeValidation,
} from "../validator/folder-file.ts";
import folderManagement from "../../infrastructure/repository/folder-managment.ts";

class Folder {
  public async createContainer(req: Request, res: Response) {
    try {
      const type = typeValidation.safeParse(req.body.type);
      if (type.success === false) {
        res.status(400).send({
          message: "Invalid type",
          error: type.error.errors[0].message,
        });
        return;
      }
      let container;
      if (type.data.type === "folder") {
        container = folderValidator.safeParse(req.body);
        if (container.success === false) {
          res.status(400).send({
            message: "Invalid type",
            error: container.error.errors[0].message,
          });
          return;
        }
        const resp = folderManagement.createFolder(
          container.data.name,
          req.body.userId
        );
        console.log(resp);
      } else {
        container = fileValidator.safeParse(req.body);
        if (container.success === false) {
          res.status(400).send({
            message: "Invalid type",
            error: container.error.errors[0].message,
          });
          return;
        }
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Something went wrong in the server side" });
    }
  }
}
const folderService = new Folder();
export default folderService;
