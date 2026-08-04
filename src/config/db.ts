import mongoose from "mongoose";
async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env");
    }
    await mongoose.connect(uri);
    console.log("Connected!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
export default connectDB;
