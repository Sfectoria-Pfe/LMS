import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io("http://localhost:5000"); //path of the server
export const SocketContext = createContext();
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const myId = useSelector((state) => state.auth.me?.id);
  useEffect(() => {
    socket.emit("connection", myId); //incide+data
  }, [socket]);

  useEffect(() => {
    socket.on("disconnection", (data) => {
      socket.emit("connection", myId);
    }); //incide+callbackFn
  }, [socket]);
  return (
    <div className="App">
      <SocketContext.Provider value={{socket}}>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} socket={socket} />
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
        <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}>
          <Outlet />
        </div>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
