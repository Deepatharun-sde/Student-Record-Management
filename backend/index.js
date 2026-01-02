const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const studentRoutes = require("./routes/student.routes");

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:1040', 'https://student-record-management-t1me.vercel.app'], // Add your Vercel frontend URL
    credentials: true // if you are using cookies/sessions
}));

/* DB Connection */
connectDB();

/* Routes */
app.use("/api", studentRoutes);

// creating server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
