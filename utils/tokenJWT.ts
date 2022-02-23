import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

type Token = { id: number | undefined, username:string };
export const signToken = async (body:Token) => 
  jwt.sign(body, 'trybe', {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

export const decodeToken = async (token:string) => {
  try {
    const response = await jwt.verify(token, 'trybe'); 
    return response;
  } catch (err) {
    return { message: 'Expired or invalid token' };
  }
};