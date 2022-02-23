import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, User } from '../interfaces/user';

const createUser = async ({ username, classe, level, password }:IUser): Promise<User> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ? )',
    [username, classe, level, password],
  );
  return {
    id,
    username,
    classe,
    level,
    password,
  };
};

export default createUser;