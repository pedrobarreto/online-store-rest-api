import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../../utils/tokenJWT';

export default async function validateAuth(req:Request, res:Response, next:NextFunction) {
  const { authorization } = req.headers;
  const decode = await decodeToken(authorization);
  await decodeToken(authorization);

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }
  if (!decode) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  next();
}