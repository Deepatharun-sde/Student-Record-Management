import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/students`
      );

      const list = res.data;

      for (let i = 0; i < list.length; i = i + 1) {
        if (list[i]._id === id) {
          setStudentName(list[i].studentName);
          setGrade(list[i].grade);
          setSubject(list[i].subject);
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/students/${id}`, {
        studentName,
        grade,
        subject,
      });

      alert("Student updated!");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Update failed!");
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto border rounded">
      <h2 className="text-xl font-bold mb-3">Edit Student</h2>
      <form onSubmit={handleUpdate} className="space-y-2">
        <input
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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button className="bg-green-600 text-white p-2 w-full rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
