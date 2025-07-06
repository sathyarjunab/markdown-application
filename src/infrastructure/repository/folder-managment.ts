import { Schema } from "mongoose";
import Folder from "../data-base/Folder.ts";
import File from "../data-base/File.ts";

class FolderManagement {
  public async createFolder(folderName: string, id: Schema.Types.ObjectId) {
    try {
      const folderCreatedResp = await Folder.create({
        name: folderName,
        userId: id,
      });
      return folderCreatedResp;
    } catch (error) {
      console.error(`Error creating folder: ${error}`);
    }
  }

  public async createFile(fileDeatails: {
    fileContent: string;
    fileName: string;
    folderId: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    type: "file";
  }) {
    try {
      const fileCreatedResp = await File.create({
        ...fileDeatails,
      });
      console.log(fileCreatedResp);
      return fileCreatedResp;
    } catch (error) {
      console.log(`Error creating file: ${error}`);
    }
  }

  public async deleteFolder(id: Schema.Types.ObjectId) {
    try {
      const deletedFolderResp = await Folder.findByIdAndDelete(id);
      return deletedFolderResp;
    } catch (error) {
      console.error(`Error deleting folder: ${error}`);
    }
  }
}

const folderManagement = new FolderManagement();
export default folderManagement;
