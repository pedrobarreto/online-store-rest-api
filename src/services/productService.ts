import model from '../models/productModel';

import { IProduct } from '../interfaces/product';

const createProduct = async ({ name, amount }:IProduct) => model.createProduct({ name, amount });

export default createProduct; 