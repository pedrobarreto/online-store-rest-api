import { Request, Response } from 'express';
import serviceCreateUser from '../services/userService';
import { signToken } from '../../utils/tokenJWT';

const createUsers = async (req:Request, res:Response) => {
  const { username, classe, level, password } = req.body;
  const { id } = await serviceCreateUser({ username, classe, level, password });
  const token = await signToken({ id, username });
  res.status(201).json({ token });
};

export default createUsers;