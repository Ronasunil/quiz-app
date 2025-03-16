import mongoose from "mongoose";
import { app } from "./app.js";

const dbConnection = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quiz");
  } catch (err) {
    dbConnection();
  }
};

app.listen(2000, async () => {
  await dbConnection();
});
