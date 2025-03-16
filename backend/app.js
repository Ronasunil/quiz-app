import express from "express";
import cors from "cors";
import { userSchema } from "./graphql/schema/userSchema.js";
import { userResolver } from "./graphql/resolvers/userResolver.js";
import { graphqlHTTP } from "express-graphql";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(
  "/users",
  graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true,
  })
);

export { app };
