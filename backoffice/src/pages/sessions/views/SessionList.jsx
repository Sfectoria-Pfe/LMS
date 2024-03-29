import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deletesession} from "../../../store/courses";
import Card from "react-bootstrap/Card";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchSessions } from "../../../store/sessions";

export default function CourseList() {
  const sessions = useSelector((state) => state.sessionsSlice.sessions.items);
  const  [modalShow, setModalShow] = useState(false);
//   const [deletedId,setDeletedId]=useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);


//   const deleteCourse=(id)=>{
//     dispatch(deletecourse(id));
//     window.location.reload();
// }


  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add session
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center py-5 gap-5 ">
        {sessions.map((card) => (
          <Card style={{ width: "54rem", height: "26rem" }}>
            <Card.Title style={{ width: "18rem" }}>{card.title}</Card.Title>
            <Card.Img
              variant="top"
              src={card.imageURL}
              style={{ height: "12rem" }}
              className="thumb-img"
            />
            <Card.Body>
            <Card.Title style={{ width: "18rem" }}>{card.duration}</Card.Title>
              <Card.Text style={{ width: "46rem" }}>
                {card.description}
              </Card.Text>
              <div className="d-flex gap-3">
                <Link to={`details/${card.id}`}>
                  <button className="btn btn-primary">See more</button>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() =>{

                    navigate(`update/${card.id}`)
                    

                  }
                  
                  }
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setModalShow(true);
                    // setDeletedId(card.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete session
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this session ?</p>
        </Modal.Body>
        <div className="d-flex justify-content-center gap-2 py-3">
          <Button onClick={() => setModalShow(false)}>Cancle</Button>

          <Button
            className="btn btn-danger"
            onClick={() => {
            //   deleteSession(deletedId);
              setModalShow(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}