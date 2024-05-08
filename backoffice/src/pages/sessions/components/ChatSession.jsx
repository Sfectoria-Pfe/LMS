import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import send from "../../../assets/images/send.png";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../apps/App";
import { useParams } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export default function ChatSession() {
  const { socket } = useContext(SocketContext);
  const [content, setContent] = useState("");
  const { sessionId } = useParams();
   const user = useSelector((store) => store.auth.me);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.emit("find-all-msgs", +sessionId);
  }, []); // request give me old msgs
  useEffect(() => {
    socket.on("get-all-msgs/" + sessionId, (data) => {
      setMessages(data);
    });
  }, []);// get old msgs
  
  useEffect(() => {
    socket.on("msg-session/" + sessionId, (data) => {
      setMessages(prev=>[...prev, data]);
    });
  }, []);// new msg when someone send a msg
 
  
  const userId = useSelector((state) => state.auth.me.id);
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send-message", {
      senderId: userId,
      sessionId: +sessionId,
      content,
    });
    setContent("");
  };
  return (
    <div className="  mt-0 d-flex  " style={{ zIndex: 200 }}>
      <section
        style={{
          borderRadius: "10px",
          width: "180%",
          height: "700px", // Set your desired height here
          overflowY: "auto",
          display: "flex", // Add display: flex to the parent container
          flexDirection: "column-reverse",
        }}
      >
        <div class=" d-flex justify-content-center align-items-center ">
          <div class="col-8">
            <ul class="list-unstyled ">
              {messages?.map((elem, i) => (
                <div
                  style={{ width: "100%" , height: "100%" }}
                  class={`d-flex py-3 gap-3  mb-4  ${
                    elem.senderId === userId ? "justify-content-end" : ""
                  }`}
                  key={i}
                >
                  <div class="card d-flex justify-content-between">
                    <div class="card-header d-flex justify-content-between p-3">
                      <p class="fw-bold mb-0">
                        {elem?.sender.firstName + " " + elem?.sender.lastName}
                      </p>
                      <p class=" d-flex gap-2 text-muted small mb-0">
                        {/* <ConversionDate
                            dateString={elem.createdAt}
                            includeHour={true}
                          /> */}
                      </p>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">{elem?.content}</p>
                    </div>
                    {userId === elem.senderId && (
                      <div className="d-flex justify-content-end">
                        {/* <IconButton color="error" aria-label="delete">
                          <DeleteIcon
                            onClick={() => {
                              // handelDelete(elem.id)
                            }}
                          />
                        </IconButton> */}
                      </div>
                    )}
                  </div>
                  <img
                    src={user.image}
                    alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                    height="60"
                  />
                </div>
              ))}
              <form
                onSubmit={sendMessage}
                className="d-flex justify-content-center align-items-center gap-3"
              >
                {" "}
                <input
                  required
                  value={content}
                  class="form-control "
                  id="textAreaExample3"
                  rows="1"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setContent(e.target.value);
                  }}
                  style={{
                    borderRadius: "200px",
                    // textAlign: "center",
                    padding: "10px",
                  }}
                ></input>
                <button
                  style={{ all: "unset", cursor: "pointer" }}
                  type="submit"
                  onSubmit={sendMessage}
                >
                  <img src="" alt="" />
                  <lord-icon
                    src="https://cdn.lordicon.com/tmqaflqo.json"
                    trigger="hover"
                    style={{ width: "5rem", height: "5rem" }}
                  ></lord-icon>
                  {/* <img alt="" src={send} style={{ width: 50, heigh: 50 }} /> */}
                </button>
              </form>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}