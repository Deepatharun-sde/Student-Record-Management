import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/students`
      );

      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student record?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/students/${id}`);
      alert("Student deleted successfully!");
      fetchStudents(); // refresh UI
    } catch (err) {
      console.log(err);
      alert("Delete failed!");
    }
  };

  return (
    <div className="max-h-80 overflow-y-auto border rounded">
      <table className="border w-full text-center text-sm">
        <thead className="bg-gray-300 sticky top-0">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr key="no-data">
              <td colSpan="4" className="p-4 text-gray-600 font-semibold">
                No students added yet
              </td>
            </tr>
          )}

          {students.length > 0 &&
            (() => {
              const rows = [];
              for (let i = 0; i < students.length; i = i + 1) {
                const s = students[i];
                rows.push(
                  <tr key={s._id}>
                    <td className="border p-2">{s.studentName}</td>
                    <td className="border p-2">{s.grade}</td>
                    <td className="border p-2">{s.subject}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => navigate(`/edit/${s._id}`)}
                        className="bg-yellow-500 px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return rows;
            })()}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
