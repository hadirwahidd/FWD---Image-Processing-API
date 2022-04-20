import { Router, Request, Response } from 'express';
import imagesRoute from './api/images.routes';

const routes = Router();

// API Endpoint
routes.get('/', (req: Request, res: Response): void => {
  res.send(
    '<br><strong><h3>This is the main api route!</h3></strong><strong><em><h4>Available Image names are:</h4></em></strong>-encenadaport<br> -fjord<br> -icelandwaterfall<br> -palmtunnel<br> -santamonica'
  );
});

// Images Routes
routes.use('/imageresize', imagesRoute);

export default routes;
