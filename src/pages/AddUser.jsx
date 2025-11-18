import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../api";
import Spinner from "../components/Spinner";
import { UserContext } from "../context/UserContext";

const AddUser = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (user) => {
    setSubmitting(true);
    try {
      const newUser = await createUser(user);
      // Update local users state immediately
      setUsers([...users, { ...newUser, id: users.length + 1 }]); // assign fake ID
      alert("User added successfully!");
      navigate("/");
    } catch {
      alert("Failed to add user");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add User</h1>
      {submitting ? <Spinner /> : <UserForm onSubmit={handleSubmit} />}
    </div>
  );
};

export default AddUser;
