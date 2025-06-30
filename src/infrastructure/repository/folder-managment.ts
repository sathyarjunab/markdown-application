class FolderManagement {
  private folderPath: string;

  constructor(folderPath: string) {
    this.folderPath = folderPath;
  }

  public async createFolder(folderName: string): Promise<void> {
    const fullPath = `${this.folderPath}/${folderName}`;
    try {
      await fs.promises.mkdir(fullPath, { recursive: true });
      console.log(`Folder created at ${fullPath}`);
    } catch (error) {
      console.error(`Error creating folder: ${error}`);
    }
  }

  public async deleteFolder(folderName: string): Promise<void> {
    const fullPath = `${this.folderPath}/${folderName}`;
    try {
      await fs.promises.rmdir(fullPath, { recursive: true });
      console.log(`Folder deleted at ${fullPath}`);
    } catch (error) {
      console.error(`Error deleting folder: ${error}`);
    }
  }
}
