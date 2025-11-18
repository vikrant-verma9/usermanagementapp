import React, { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch {
        alert("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
