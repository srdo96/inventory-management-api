import colors from "colors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import app from "../app";
colors.enable();
dotenv.config();

// Database connect
mongoose
  .connect(process.env.MONGODB_ATLAS as string)
  .then(() => console.log("Database connection is successful".yellow.bold));

const port = process.env.PORT || 7000;

app.listen(() => {
  //   console.log(chalk.yellow.bold("listing to port =>", port));
  console.log("listing to port ->", port);
});
