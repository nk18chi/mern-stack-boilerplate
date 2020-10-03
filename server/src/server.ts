import express from "express";
import cors from "cors";
import concectDatabase from "./database";

const PORT = process.env.PORT || 4000;
const app = express();
concectDatabase();

app.use(cors({ credentials: true, origin: true }));
app.use("/users", require("./routes/user"));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
