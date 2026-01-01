const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const studentRoutes = require("./routes/student.routes");

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());

/* DB Connection */
connectDB();

/* Routes */
app.use("/api", studentRoutes);

// creating server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
