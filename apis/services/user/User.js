import User from "../../models/User.js";

class UserService {
  constructor() {}

  async saveUser(userObject) {
    const user = new User(userObject);
    return await user.save();
  }

  async findUser(findObject) {
    return await User.findOne(findObject);
  }

  async updateUser(findObject, updateObject) {
    return await User.findOneAndUpdate(findObject, updateObject);
  }
}

export default UserService;
