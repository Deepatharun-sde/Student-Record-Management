import React, { useState } from "react";
import axios from "axios";

function StudentForm({ onAdded }) {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/.netlify/functions/api/api/students", {
        studentName,
        grade,
        subject,
      });

      alert("Student added successfully!");
      onAdded(); // refresh list
      setStudentName("");
      setGrade("");
      setSubject("");
    } catch (err) {
      console.log(err);
      alert("Failed to add student!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="border p-2 w-full rounded bg-white"
      >
        <option value=""> Select Grade</option>
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="RA">RA</option>
      </select>

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button className="bg-blue-600 text-white p-2 w-full rounded">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
