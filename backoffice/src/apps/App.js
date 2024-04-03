import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../layout/NavBar";
import * as React from "react";
import SideBar from "../layout/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MiniDrawer from "../layout/MiniDrawer";
function App() {
  // const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);

  return (
    // <div className="App">
    //   <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    //   {isOpen && <SideBar setIsOpen={setIsOpen} />}
    <div>
      <MiniDrawer open={open} setOpen={setOpen} />
      {/* <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}> */}
      <div style={{ paddingLeft: open ? 240 : 65, paddingTop: 70 }}>
        <Outlet />
      </div>
    </div>

    //
    // </div>
  );
}

export default App;
