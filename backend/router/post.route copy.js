import express, { Router } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
router.get("/anothertest", (req, res) => {
  res.status(200).send("User Router");
});

export default router;
