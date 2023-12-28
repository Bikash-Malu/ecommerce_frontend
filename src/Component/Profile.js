import React from "react";
import { json } from "react-router-dom";

const Profile = () => {
  const auth=localStorage.getItem('user')
  return (
    <div>
      <div class="container mt-4">
        <h2>User Information Table</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <td>{JSON.parse(auth)._id}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{JSON.parse(auth).name}</td>
            </tr>
            <tr>
              <th>Email</th>
            <td>{JSON.parse(auth).email}</td>

            </tr>
            <tr>
              <th>Password</th>
              <td>{JSON.parse(auth).password}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
