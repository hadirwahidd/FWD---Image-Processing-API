import express, { Application, Request, Response } from 'express';
import routes from './routes/index';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

// Create server
const app: Application = express();

// Specify port
const port = process.env.PORT || 3000;

// use logger middleware
app.use(morgan('dev'));

// API Route
app.use('/api', routes);

// Main Endpoint
app.get('/', (req: Request, res: Response): void => {
  res.send(
    `<br><strong><h3>"Hello, You're on the main route. This is the Resizing Api!"</h3></strong><br>
    Please visit: <em>http://localhost:3000/api</em> to know the image names you can use.<br><br>
    Please access: <em>http://localhost:3000/api/imageresize/?name=name&width=150&height=150</em> to resize images and get the API working!<br><br>
    Feel free to change the values of the 3 query parameters (name, width, height) as you desire!"`
  );
});

// check server
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
