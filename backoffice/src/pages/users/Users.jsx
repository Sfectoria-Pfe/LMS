import React from 'react'
import { Outlet } from "react-router-dom";

function Users() {
  return (
    <div>
      <h3 className="p-3" style={{ fontFamily: "Segoe UI", color: "#11354D",textDecoration:"underline" }}>
        LMS USERS
      </h3>
      <Outlet />
    </div>
  );
}

export default Users