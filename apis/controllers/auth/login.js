import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../../services/user/User.js";

const login = async (req, res) => {
  const response = {
    success: false,
    message: "Invalid username or password",
  };

  const userService = new UserService();
  const userName = req.body.userName;

  const user = await userService.findUser({ userName });
  if (!user) {
    return res.status(400).json(response);
  }

  const plainTextPassword = req.body.password;
  const hashedPassword = user.password;

  const isPasswordValid = await bcrypt.compare(
    plainTextPassword,
    hashedPassword
  );
  if (!isPasswordValid) {
    return res.status(400).json(response);
  }

  const now = Math.floor(Date.now() / 1000);
  const jwtPayload = {
    userId: user._id,
    theme: user.themePreference,
    iat: now,
    exp: now + 3600,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY);
  await userService.updateUser({ userName }, { token });
  res.cookie("token", token, {
    maxAge: 3_600 * 1_000,
    httpOnly: false,
    sameSite: "Lax",
    path: "/",
  });
  res.send("Login successful");
};

export default login;
