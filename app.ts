import mongoose, { connect } from "mongoose";
import { User } from "./models/User";

mongoose.set("strictQuery", false);

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect("mongodb://localhost:27017/tsapp");

  console.log("Connected to DB.");

  const newUser = new User({
    name: "Testname",
  });
  await newUser.save().then((res) => console.log(res));
}
