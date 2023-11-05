import bcrypt from "bcrypt";

const generateHash = async (plainText = "") => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainText, salt);
  return hash;
};

export default {
  generateHash,
};
