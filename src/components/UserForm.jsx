import React, { useState } from "react";

const UserForm = ({ initialData, onSubmit }) => {
  const [user, setUser] = useState(initialData || { name: "", email: "", phone: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={user.phone}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
