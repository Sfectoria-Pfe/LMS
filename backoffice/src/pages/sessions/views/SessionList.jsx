import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deletesession} from "../../../store/courses";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";
import Modal from "react-bootstrap/Modal";
import { fetchSessions  , deletesession } from "../../../store/sessions";

export default function CourseList() {
  const sessions = useSelector((state) => state.sessionsSlice.sessions.items);
  const  [modalShow, setModalShow] = useState(false);

const [deletedId, setDeletedId] = useState("");

  const dispatch = useDispatch();

  const deleteSession = (id) => {
    dispatch(deletesession(id));
  };

  const deletedIdfunc = (id) => {
    setDeletedId(id);
  };

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
        <button className="btn btn-success" onClick={() => navigate("add")}>
          Add session +
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center py-5 gap-5 ">
        {sessions.map((card) => (
          
          <Card sx={{ maxWidth: 345 , maxHeight: 500 }}>
           
            <CardMedia
              style={{ objectFit: "cover" }}
              component="img"
              alt="green iguana"
              height="140"
              image={card.imageURL}
            />
            <CardContent style={{height:"10rem"}}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="py-2"
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {card.duration}
              </Typography>
              </CardContent>
          
            <CardActions>
            <Button
                size="small"
                onClick={() => {
                  navigate(`${card.id}`);
                }}
                variant="outlined"
              >
              See more
              </Button>
              <Button
                size="small"
                onClick={() => {
                  navigate(`update/${card.id}`);
                }}
                variant="outlined"
                color="secondary"
              >
                Update
              </Button>
              <Button
                size="small"
                onClick={() => {
                  setModalShow(true);
                  deletedIdfunc(card.id);
                }}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
              </CardActions>
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
              deleteSession(deletedId);
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