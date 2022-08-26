# Image Processing API Project

an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Scripts:

First type npm i to in the terminal to install all modules specified in the package.json

start the program by writing npm start in the terminal.
this command will compile typescript into js and runs the server.

npm run build to transpile ts to js.

npm run prettier to run prettier.

while the server is running, in a new terminal add npm run test to compile the test code and start testing.

## Endpoints:

As there are only 2 images in the imgs folder the name of "download" and "tree", so the useful endpoints to test this API are:
"/api/images?filename=tree&width=300&height=600",
"/api/images?filename=download&width=300&height=600"

These endpoint should always return a status code of 200

Any other attribute in the filename parameter would return an 404 status code
