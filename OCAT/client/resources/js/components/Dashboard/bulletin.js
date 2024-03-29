import React from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardBulletin = ({setAuth}) => {
  const logout = async e => {
    e.preventDefault();
    try {
      toast.success("Logged out Successfully");
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">
        OCAT Dashboard
      </h1>
      <ul>
        <li>
          <Link to="/assessment/new">New Assessment</Link>
        </li>
        <li>
          <Link to="/assessment/list">Assessment List</Link>
        </li>
      </ul>
      <hr />
      <button className="btn btn-danger" onClick ={e => logout(e)}>Logout</button>
    </div>
  );
}
    
export default DashboardBulletin;
