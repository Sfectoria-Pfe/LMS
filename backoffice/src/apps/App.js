import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <SideBar setIsOpen={setIsOpen} />}

      <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
