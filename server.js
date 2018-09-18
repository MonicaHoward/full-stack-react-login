const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/users", users);

app.get("/", (req, res) => res.send("Hello, World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
