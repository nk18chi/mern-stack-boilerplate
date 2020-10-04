import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import concectDatabase from "./database";
import schema from "./models/schema";

const PORT = process.env.PORT || 4000;
const app = express();
concectDatabase();

app.use(cors({ credentials: true, origin: true }));
app.use("/users", require("./routes/user"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
