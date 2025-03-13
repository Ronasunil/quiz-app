import { UserModel } from "../../model/userModel.js";

const userResolver = {
  getUserById: async ({ id }) => {
    try {
      return await UserModel.findById(id);
    } catch (err) {
      throw new Error("Error retrieving user");
    }
  },

  getUsers: async () => {
    try {
      return await UserModel.find();
    } catch (err) {
      throw new Error("Error retrieving users");
    }
  },

  authUser: async ({ name }) => {
    try {
      const userExists = await UserModel.findOne({ name });
      if (userExists) return userExists;
      const user = await UserModel.create({ name });
      return user;
    } catch (err) {
      throw new Error("Error creating user");
    }
  },

  updateHighScore: async ({ id, score }) => {
    try {
      const userExists = await UserModel.findById(id);
      if (!userExists) throw new Error(`User not found`);
      return await UserModel.findByIdAndUpdate(
        id,
        { highScore: score },
        { new: true, runValidators: true }
      );
    } catch (err) {
      throw new Error(`Error updating user`);
    }
  },

  updateCurrentScore: async ({ id, score }) => {
    try {
      const userExists = await UserModel.findById(id);
      if (!userExists) throw new Error(`User not found`);
      return await UserModel.findByIdAndUpdate(
        id,
        { $inc: { currentScore: score } },
        { new: true, runValidators: true }
      );
    } catch (err) {
      throw new Error(`Error updating user`);
    }
  },

  updateUserProfileImage: async ({ id, newImage }) => {
    try {
      const userExists = await UserModel.findById(id);
      if (!userExists) throw new Error(`User not found`);
      return await UserModel.findByIdAndUpdate(
        id,
        { profileImage: newImage },
        { new: true, runValidators: true }
      );
    } catch (err) {
      throw new Error(`Error updating user`);
    }
  },
};

export { userResolver };
