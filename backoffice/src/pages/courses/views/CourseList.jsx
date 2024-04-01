import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletecourse, fetchCourses } from "../../../store/courses";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";

import Modal from "react-bootstrap/Modal";

export default function CourseList() {
  const courses = useSelector((state) => state.coursesSlice.courses.items);
  const [modalShow, setModalShow] = useState(false);
  const [deletedId, setDeletedId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const deleteCourse = (id) => {
    dispatch(deletecourse(id));
  };

  const deletedIdfunc = (id) => {
    setDeletedId(id);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3
          className="p-5"
          style={{
            fontFamily: "Segoe UI",
            color: "#11354D",
            textDecoration: "underline",
          }}
        >
          Welcome to courses page
        </h3>
        <div className=" p-5">
          <button
            className="btn"
            style={{ backgroundColor: "#ffc107" }}
            onClick={() => navigate("add")}
          >
            + Add new course
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center py-3 gap-5 ">
        {courses.map((card) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ objectFit: "cover" }}
              component="img"
              alt="green iguana"
              height="140"
              image={card.imageURL}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  navigate(`details/${card.id}`);
                }}
                variant="outlined"
              >
                Learn More
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
          // <Card style={{ width: "21rem", height: "28rem" }}>
          //   <Card.Img
          //     variant="top"
          //     src={card.imageURL}
          //     style={{ height: "11rem" }}
          //     className="thumb-img"
          //   />
          //   <Card.Body>
          //     <Card.Title style={{ width: "18rem", height: "4rem" }}>
          //       {card.title}
          //     </Card.Title>
          //     <Card.Text style={{ width: "18rem", height: "7rem" }}>
          //       {card.description}
          //     </Card.Text>
          //     <div style={{height:"3rem"}}>

          //     <div className="d-flex gap-3" >
          //       <Link to={`details/${card.id}`}>
          //         <button className="btn btn-primary">See more</button>
          //       </Link>
          //       <button
          //         className="btn btn-warning"
          //         onClick={() => {
          //           navigate(`update/${card.id}`);
          //         }}
          //       >
          //         Update
          //       </button>
          //       <button
          //         className="btn btn-danger"
          //         onClick={() => {
          //           setModalShow(true);
          //          deletedIdfunc(card.id);
          //         }}
          //       >
          //         Delete
          //       </button>
          //     </div>
          //     </div>
          //   </Card.Body>
          // </Card>
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
            Delete course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this course ?</p>
        </Modal.Body>
        <div className="d-flex justify-content-center gap-2 py-3">
          <Button onClick={() => setModalShow(false)}>Cancle</Button>

          <Button
            className="btn btn-danger"
            onClick={() => {
              deleteCourse(deletedId);
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
