import express from "express";
import User from "../models/user";
import mongoose from "mongoose";

const router = express.Router();
router.get("/", async (req, res) => {
  const users = await User.find().exec();
  res.json(users);
});

module.exports = router;
