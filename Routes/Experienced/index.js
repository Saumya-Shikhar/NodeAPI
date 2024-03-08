import {Router} from 'express';
import { getData, setData } from './controller.js';

const experienceRouter = Router();
experienceRouter.post('/create', setData);
experienceRouter.get('/extract', getData);
export default experienceRouter;