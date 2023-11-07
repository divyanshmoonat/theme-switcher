import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import passport from "./middlewares/auth.js";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connection established successfully");
  })
  .catch((err) => {
    console.log("Error connecting Database", err);
  });

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://654a82188590b80076adc329--melodic-tartufo-63b28f.netlify.app",
  })
);

const apiVersion = "v1";

// Routes
app.use(`/api/${apiVersion}/auth`, authRoutes);
app.use(`/api/${apiVersion}/user`, userRoutes);

app.use((err, req, res, next) => {
  console.log("SOME ERROR OCCURED", err);
  // We can log the error to files or ELK to analyze them later
  res
    .status(500)
    .json({
      success: false,
      message: err.message || "Something went wrong, please try again later",
    });
});

app.listen(process.env.PORT, () => {
  console.log("Server is up and running at port", process.env.PORT);
});
