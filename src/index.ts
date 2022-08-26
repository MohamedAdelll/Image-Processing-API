import express from "express";
import sharp from "sharp";

import fs from "fs";
import path from "path";
import processImage from "./utilities/helpers";
const app = express();

app.get("/api/images", (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as unknown as string,
    width: number = parseInt(req.query.width as unknown as string),
    height: number = parseInt(req.query.height as unknown as string);
  if (
    !width ||
    !height ||
    typeof width !== "number" ||
    typeof height !== "number" ||
    width <= 0 ||
    height <= 0
  )
    return res
      .status(404)
      .send(`Please enter a valid positive number for the height and width`);
  const imgPath = path.join(__dirname, "..", "imgs", filename) + ".jpg",
    correctedImgPath =
      path.join(
        __dirname,
        "..",
        "thumbnails",
        `${filename}_${width}_${height}`
      ) + ".jpg";
  fs.exists(correctedImgPath, (exists: boolean) => {
    if (exists) return res.status(200).sendFile(correctedImgPath);
    else {
      fs.readFile(imgPath, async (err, data: Buffer) => {
        if (err) return res.status(404).send(`Couldn't find the image`);

        const newImage = await processImage(imgPath, width, height);

        fs.writeFile(correctedImgPath, newImage, (err) => {
          if (err) return res.status(404).send(`Couldn't ptocess the image`);
          return res.status(200).sendFile(correctedImgPath);
        });
      });
    }
  });
});
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

export default app;
