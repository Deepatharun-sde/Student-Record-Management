const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentName: String,
  grade: String,
  subject: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
