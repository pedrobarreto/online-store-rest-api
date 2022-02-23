import express from 'express';
import getUsers from './controllers/usersController';
import validateBody from './middlewares/userValidation';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post('/users/', validateBody, getUsers);

export default app;
