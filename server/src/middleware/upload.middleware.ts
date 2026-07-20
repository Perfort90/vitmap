import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.resolve("server/uploads/avatars"));
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const fileName = `avatar-${Date.now()}${extension}`;

    callback(null, fileName);
  },
});

export const uploadAvatar = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (_req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

    if (!allowedTypes.includes(file.mimetype)) {
      callback(new Error("Можно загружать только изображения"));
      return;
    }

    callback(null, true);
  },
});