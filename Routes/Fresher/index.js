import {Router} from 'express';
import { getItem, setItem } from './controller.js';

const fresherRouter = Router();
fresherRouter.post('/create', setItem);
fresherRouter.get('/get', getItem);

export default fresherRouter;