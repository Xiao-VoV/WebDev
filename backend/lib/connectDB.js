import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(`正在连接数据库${process.env.MONGODB_URI}`);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("数据库连接成功");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
