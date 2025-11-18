import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import Spinner from "../components/Spinner";
import { updateUser } from "../api";
import { UserContext } from "../context/UserContext";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const selectedUser = users.find((u) => u.id === parseInt(id));
    setUser(selectedUser || null);
  }, [id, users]);

  const handleSubmit = async (updatedUser) => {
    setSubmitting(true);
    try {
      let updated;
      if (parseInt(id) <= 10) {
        // Existing API user → call PUT
        updated = await updateUser(id, updatedUser);
        updated.id = parseInt(id); // ensure ID is preserved
      } else {
        // Locally added user → just update local state
        updated = { ...updatedUser, id: parseInt(id) };
      }

      // Update users state
      setUsers(users.map((u) => (u.id === parseInt(id) ? updated : u)));

      alert("User updated successfully!");
      navigate("/");
    } catch {
      alert("Failed to update user");
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) return <p className="text-red-500 text-center mt-10">User not found</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      {submitting ? <Spinner /> : <UserForm initialData={user} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditUser;
