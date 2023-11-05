import express from "express";

import authController from "../controllers/auth/index.js";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

router.post("/login", catchAsync(authController.login));

export default router;
