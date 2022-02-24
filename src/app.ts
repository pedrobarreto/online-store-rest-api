import express, { json } from 'express';
import { createUsers, loggedUsers } from './controllers/usersController';
import validateBody from './middlewares/userValidation';
import validateLogin from './middlewares/loginValidation';

const app = express();

app.use(json());

app.post('/users/', validateBody, createUsers);
app.post('/login/', validateLogin, loggedUsers);

export default app;
