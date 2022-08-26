import fs, { writeFile, writeFileSync } from "fs";
import path from "path";
import supertest from "supertest";
import processImage from "../utilities/helpers";
const request = supertest("http://localhost:3000");
describe("TESTING GET /api/images", () => {
  describe("User selects image that doesn't exist", () => {
    it("should return status code 404", async () => {
      const response = await request.get(
        "/api/images?filename=treeeee&width=300&height=600"
      );
      expect(response.statusCode).toBe(404);
    });

    it("should return error message to the user", async () => {
      const response = await request.get(
        "/api/images?filename=treeeee&width=300&height=600"
      );
      expect(response.text).toBe(`Couldn't find the image`);
    });
  });
  describe("If image is found", () => {
    it("should return status code 200", async () => {
      const response = await request.get(
        "/api/images?filename=tree&width=300&height=600"
      );

      expect(response.statusCode).toBe(200);
    });

    it("should return the image to the user", async () => {
      const response = await request.get(
        "/api/images?filename=tree&width=300&height=600"
      );
      expect(response.type).toBe("image/jpeg");
    });
  });
});
describe("Test for image processing", () => {
  it("Should create a new image with name of test_300_300.jpg in the root directory", async () => {
    //First delete any instance of test_300_300.jpg before every test
    fs.exists(
      path.join(__dirname, "..", "..", "test_300_300.jpg"),
      (exists) => {
        if (exists)
          fs.unlinkSync(path.join(__dirname, "..", "..", "test_300_300.jpg"));
      }
    );

    const originalImgPath =
      path.join(__dirname, "..", "..", "imgs", "tree") + ".jpg";
    const processedImgPath =
      path.join(__dirname, "..", "..", "test_300_300") + ".jpg";
    const img = await processImage(originalImgPath, 300, 300);
    writeFileSync(processedImgPath, img);
    const rootDirListArr = fs.readdirSync(path.join(__dirname, "..", ".."));
    expect(rootDirListArr).toContain("test_300_300.jpg");
  });
});
