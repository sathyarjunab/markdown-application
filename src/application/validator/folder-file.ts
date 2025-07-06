import { z } from "zod";

export const typeValidation = z.object({
  type: z.enum(["folder", "file"]).default("folder"),
});

export const folderValidator = z.object({
  name: z.string().min(1, "Folder name is required"),
  userId: z.string().min(1, "User ID is required"),
  type: z.literal("folder").default("folder"),
});

export const fileValidator = z.object({
  fileName: z.string().min(1, "File name is required"),
  userId: z.string().min(1, "User ID is required"),
  fileContent: z.string().optional(),
  type: z.literal("file").default("file"),
  folderId: z.string().optional(),
});
