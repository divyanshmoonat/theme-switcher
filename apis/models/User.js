import mongoose from "mongoose";

const themeEnum = {
  values: ["LIGHT", "DARK"],
  message: "Invalid value for field themePreference",
};

const userSchema = {
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  themePreference: {
    type: String,
    enum: themeEnum,
  },
  token: {
    type: String,
    default: "",
  },
};

const userSchemaOptions = {
  timestamps: true,
};

const UserSchema = new mongoose.Schema(userSchema, userSchemaOptions);

export default mongoose.model("users", UserSchema);
