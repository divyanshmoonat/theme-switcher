import express from "express";

import userController from "../controllers/user/index.js";
import passport from "passport";
import catchAsync from "../utils/catchAsync.js";

const router = express.Router();

router.post(
  "/update-theme-preference",
  passport.authenticate("cookie", { session: false }),
  catchAsync(userController.updateThemePreference)
);

export default router;
