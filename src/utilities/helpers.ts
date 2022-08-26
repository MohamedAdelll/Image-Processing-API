import sharp from "sharp";

export default async function processImage(
  imgPath: string,
  width: number,
  height: number
): Promise<Buffer> {
  return sharp(imgPath)
    .resize(+width, +height)
    .toBuffer();
}
