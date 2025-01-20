import express from "express";
import userRouter from "./router/user.route.js";
import postRouter from "./router/post.route.js";
import commentRouter from "./router/comment.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log("服务启动,监听:localhost:3000");
});
