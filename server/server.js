const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
mongoose.set("strictQuery", true);
mongoose.connect(DB).then(() => console.log("DB connection successful"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening in port ", port);
});
