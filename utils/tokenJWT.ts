import dotenv from 'dotenv';
import { sign, verify } from 'jsonwebtoken';

dotenv.config();

type Token = { id: number | undefined, username:string };

export const signToken = async (body:Token) => 
  sign(body, 'trybe', {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

export const decodeToken = async (token:string | undefined) => {
  try {
    const response = await verify(token as string, 'trybe'); 
    return response;
  } catch (err) {
    return false;
  }
};
