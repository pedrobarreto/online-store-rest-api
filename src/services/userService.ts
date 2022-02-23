import modelCreateUser from '../models/userModel';

import { User } from '../interfaces/user';

const createUser = async ({ username, classe, level, password }:User) =>
  modelCreateUser({ username, classe, level, password });

export default createUser;