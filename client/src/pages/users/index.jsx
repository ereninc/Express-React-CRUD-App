import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setUsers(response.data);
      console.log(response.data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const response = await axios.delete(`http://localhost:5000/users/${id}`);
      if (response.status === 200) {
        getUsers();
      }
    }
  };

  const onEditUser = (id) => {
    window.location.href = `/edit/${id}`;
  };

  const onViewUser = (id) => {
    window.location.href = `/view/${id}`;
  };

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.contact}</td>
                  <td className="buttons">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onViewUser(user.id);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        onEditUser(user.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
