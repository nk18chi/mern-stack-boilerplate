import mongoose from "mongoose";
import config from "config";
const MONGO_URI: string = config.get("MONGO_URI");

const concectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to mongo");
  } catch (err) {
    console.log("There was a problem connecting to mongo: ", err);
  }
};

export default concectDatabase;
