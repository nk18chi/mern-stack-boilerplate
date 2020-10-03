import express from "express";
import User from "../models/user";
import mongoose from "mongoose";

const router = express.Router();
router.get("/", async (req, res) => {
  const users = await User.find().exec();
  console.log("run");
  console.log(users);
  res.json(users);
});

var MongoClient = require("mongodb").MongoClient;
router.get("/test", async (req, res) => {
  console.log("test");
  res.json([Object.keys(mongoose.connection.collections)]);
});

module.exports = router;
