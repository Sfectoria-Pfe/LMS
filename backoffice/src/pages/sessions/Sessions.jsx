import React from 'react'
import { Outlet } from "react-router-dom";

function Session() {
  return (
    <div>
      <h3 className="p-3" style={{ fontFamily: "Segoe UI", color: "#11354D",textDecoration:"underline" }}>
        You are in sessions page
      </h3>
      <Outlet />
    </div>
  );
}

export default Session