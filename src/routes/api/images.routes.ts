import { Router, Request, Response } from 'express';
import path from 'path';
import resize from '../../utilities/resizeImg';
import { existsSync } from 'fs';

const imagesRoute = Router();

imagesRoute.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const name = req.query.name as string;
    const imgLocation = path.resolve(`images/original/${name}.jpg`);
    const resizedImage = path.resolve(`images/resized/${name}_${width}_${height}.jpg`);

    // If the name query wasn't provided
    if (name === undefined) {
      res.status(400).send('Bad request, you need to provide name query parameter');
    } else {
      // If width or height aren't provided or not numbers
      if (isNaN(width) || isNaN(height)) {
        res.status(401).send('Please make sure you type in numbers for the width/height parameters');
      }

      // If width and height are invalid inputs
      else if (width <= 0 || height <= 0) {
        res.status(402).send('Please provide a positive number!');
      }
    }

    if (width && height && name) {
      // If the image exists
      if (existsSync(imgLocation) === true) {
        if (existsSync(resizedImage)) {
          res.sendFile(resizedImage);
        } else {
          await resize(name, width, height);
          res.sendFile(resizedImage);
        }
      }
      // If the image doesn't exist
      else {
        res.status(403).send("This image doesn't exist. Please visit the main api route to find working names");
      }
    }
  } catch (error) {
    res.send(error);
  }
});

export default imagesRoute;
