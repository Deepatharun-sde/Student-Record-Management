import React from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Home() {
  const refresh = () => window.location.reload(); // temporary refresh

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-3">Student Record Management</h1>
      <StudentForm onAdded={refresh} />
      <StudentList />
    </div>
  );
}

export default Home;
