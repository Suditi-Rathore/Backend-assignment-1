import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
"mongodb+srv://suditirathore_db_user:ZqYibmx2GzJ1yhbB@cluster0.q3ovy5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

