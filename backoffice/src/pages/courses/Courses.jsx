import React from 'react'
import { Outlet } from "react-router-dom";

function Course() {
  return (
    <div>
      {/* <h3 className="p-3" style={{ fontFamily: "Segoe UI", color: "#11354D",textDecoration:"underline" }}>
        You are in courses page
      </h3> */}
      <Outlet />
    </div>
  );
}

export default Course
