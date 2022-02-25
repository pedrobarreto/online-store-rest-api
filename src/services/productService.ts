import model from '../models/productModel';

import { IProduct } from '../interfaces/product';

export const createProduct = async ({ name, amount }:IProduct) => 
  model.createProduct({ name, amount });

export const getProduct = async () => model.getProduct();
