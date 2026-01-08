const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const connectDB = require("../../config/db");
const studentRoutes = require("../../routes/student.routes");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/students", studentRoutes);

module.exports.handler = serverless(app);
