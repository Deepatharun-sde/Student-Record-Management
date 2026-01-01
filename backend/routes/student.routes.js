const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/student.controller");

router.post("/students", addStudent);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

module.exports = router;
