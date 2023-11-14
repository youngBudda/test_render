const app = require("./app");
const mongoose = require("mongoose");

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

const DB_HOST =
  "mongodb+srv://admin:adminadmin@cluster0.fumjo3k.mongodb.net/db-contacts?retryWrites=true&w=majority";

// const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log(`Database connection successful. PORT = 3000`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
//
