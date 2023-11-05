import passport from "passport";
import CookieStrategy from "passport-cookie";

import UserService from "../services/user/User.js";

passport.use(
  new CookieStrategy(async function (token, done) {
    const userService = new UserService();
    console.log(token);
    const user = await userService.findUser({ token });
    console.log(user);
    if (!user) return done(null, false);
    return done(null, user);
  })
);

export default passport;
