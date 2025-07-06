import { model, Model, Schema } from "mongoose";

interface IFile {
  name: string;
  userId: Schema.Types.ObjectId;
  folderId?: string; // Optional, if the file can exist without a folder
  content: string;
}

export const FileSchema = new Schema<IFile>(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    folderId: {
      type: Schema.Types.ObjectId,
      required: false, // Optional field
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
  }
);

const File: Model<IFile> = model("File", FileSchema);

export default File;
