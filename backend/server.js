import mongoose from "mongoose";
import { app } from "./app.js";
import { graphqlHTTP } from "express-graphql";
import { userSchema } from "./graphql/schema/userSchema.js";
import { userResolver } from "./graphql/resolvers/userResolver.js";

const dbConnection = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quiz");
  } catch (err) {
    dbConnection();
  }
};

app.use(
  "/users",
  graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true,
  })
);

app.listen(2000, async () => {
  await dbConnection();
});
