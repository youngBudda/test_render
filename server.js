// const DB_HOST =
//   "mongodb+srv://admin:admin@cluster0.fumjo3k.mongodb.net/db-contacts?retryWrites=true&w=majority";

const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(`Database connection successful. PORT = ${PORT}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
