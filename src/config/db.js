import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      ///mongodb link reemoved for security reasons
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

