const mongoose = require("mongoose"); // importing mongoose

// creating connection for db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // importing URI from .env
    console.log("✅Database connected :", conn.connection.host); // msg after connection
  } catch (error) {
    console.error("❌Failed to connect database", error);
    process.exit(1); // exiting the error
  }
};

module.exports = connectDB; // exporting the db connection module
