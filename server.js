const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());   // ✅ brackets added
app.use(cors());

const UserRoutes = require("./Routers/UserRouters");
app.use("/api/user", UserRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB not connected", err);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
