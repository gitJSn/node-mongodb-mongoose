const { default: mongoose } = require("mongoose");
const User = require("./User");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/test").then(() => {
  console.log("connected");

  const newUser = new User({ name: "Testname" });

  newUser.save().then((res) => console.log(res));
});
