# FWD - Image Processing API

Advanced Track - Project #1

## Package Manager used:

- npm
 >> Type `npm install` into your terminal to install all the dependencies and devDependencies for this project.

## Dependencies:

- dotenv, express, morgan, sharp.

## Scripts:

- `npm run prettier`: runs prettier to format code in both JS & TS files.
- `npm run lint`: runs ESLint to make sure code style is consistent.
- `npm run lint:fix`: runs ESLint to fix errors.
- `npm run format`: to run prettier and ESLint both together.
- `npm run build`: compiles TypeScript files into JavaScript files in 'build' folder.
- `npm run test`: runs jasmine unit tests on JavaScript files. (Make sure to delete the images that will be resized after testing to be able to run the tests again without errors).
- `npm run spin`: starts/spins the server in development mode (runs index.ts).
- `npm run start`: builds the projcet and starts the app (runs index.js).
>> Press ctrl + c to terminate batch job.

## Endpoints:

- http://localhost:3000/ >> main route, including instructions on how to use the api.

- http://localhost:3000/api >> main api route, including image names that can be used.

- http://localhost:3000/api/imageresize/?name=name&width=width&height=height >> the resizing API, you provide the image name, the desired width and height into the url query to successfully resize an image. Any missing/invalid query parameters will cause an error.

## Image Names:

- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica