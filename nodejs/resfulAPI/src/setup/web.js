import express from 'express' 
import publicRouter from "../route/public-api.js";
import errorMiddleware from "../middleware/errorHandling.js";

export const app = express();

app.use(express.json());
app.use(errorMiddleware);
app.post(publicRouter);