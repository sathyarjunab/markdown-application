import mongoose, { model, Model, Schema } from "mongoose";

export interface IFolder {
  name: string;
  userId: Schema.Types.ObjectId;
}

export const FolderSchema = new Schema<IFolder>(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    autoCreate: false,
    autoIndex: false,
  }
);

const Folder: Model<IFolder> =
  mongoose.models.Folder || model("Folder", FolderSchema);

export default Folder;
