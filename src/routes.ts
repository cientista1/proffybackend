import express from 'express';
import classesControllers from "./Controllers/classesControllers";
import ConnectionsController from './Controllers/ConnectiosController';


const routes = express.Router();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.store);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.store);


export default routes;