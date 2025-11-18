import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserList from "../components/UserList";
import SkeletonRow from "../components/SkeletonRow";
import { deleteUser } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const { users, setUsers, loading } = useContext(UserContext);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Link to="/add">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add User</button>
        </Link>
      </div>

      {loading ? (
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      ) : (
        <UserList users={users} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
