import { generateUsersMocks } from "../../mock/user.mock.js";
import { userDao } from "./user.dao.js";

class UserService{
  async createUsersMocks(amount){
    const users = generateUsersMocks(amount);

    await userDao.removeAll();

    for( const user of users) {
      await userDao.create(user);
    }

    return users;
  }

  async getAll(){
    return await userDao.getAll();
  }


}

export const userService = new UserService();