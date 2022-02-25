import { Request, Response } from 'express';
import createProduct from '../services/productService';

const createProducts = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  const products = await createProduct({ name, amount });
  res.status(201).json({ item: products }); 
};

export default createProducts;