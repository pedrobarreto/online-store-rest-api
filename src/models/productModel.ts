import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, Product } from '../interfaces/product';

const createProduct = async ({ name, amount }:IProduct): Promise<Product> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ? )',
    [name, amount],
  );
  return {
    id,
    name,
    amount,
  };
};

export default { createProduct };