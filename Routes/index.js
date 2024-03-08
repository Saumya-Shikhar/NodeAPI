import { Router } from "express";
import fresherRouter from "./Fresher/index.js";
import experienceRouter from './Experienced/index.js';

const mainRouter = Router();
mainRouter.use('/Experience', experienceRouter);
mainRouter.use('/Fresher', fresherRouter);

export default mainRouter;