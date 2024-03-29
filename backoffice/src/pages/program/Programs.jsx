import React from 'react'
import { Outlet } from "react-router-dom";

export default function Programs() {
  return (
    <div>
      <h3 className="p-3" style={{ fontFamily: "Segoe UI", color: "#11354D",textDecoration:"underline" }}>
        You are in programs page
      </h3>
      <Outlet />
    </div>
    
  )
}
