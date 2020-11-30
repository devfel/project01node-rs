import path from "path";
import crypto from "crypto";
import multer from "multer";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp"),
    filename(request, file, callback) {
      //adding randomness to the the file name to avoid duplication
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};
