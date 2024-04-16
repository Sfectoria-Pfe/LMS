import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletecourse, fetchCourses, sendcourse } from "../../../store/courses";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";

import Modal from "react-bootstrap/Modal";
import AddCourse from "./AddCourse";
import PopUp from "./PopUp";
import axios from "axios";

export default function CourseList() {
  const courses = useSelector((state) => state.coursesSlice.courses.items);
  const coursecreated = useSelector((state) => state.coursesSlice.course);
  console.log(coursecreated, "course created");
  const [modalShow, setModalShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deletedId, setDeletedId] = useState("");
  const [course, setcourse] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  console.log(course);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcourse({ ...course, [name]: name === "price" ? +value : value });
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let auxCourse = { ...course };
      if (imageUrl) {
        const formData = new FormData();
        formData.append("file", imageUrl);
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        auxCourse = { ...auxCourse, imageURL: response.data.path };
      }

      dispatch(sendcourse(auxCourse)).then((res) => {
        if (!res.error)
          window.location.href =
            `http://localhost:3000/courses/details/${res.payload.id}`;
        else
          alert("you should fill the form");
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            onClick={() => {
              setIsOpen(true);
              <PopUp setIsOpen={setIsOpen} isOpen={isOpen} />;
            }}
          >
            + Add new course
          </button>
          {/* <AddCourse setIsOpen={setIsOpen} isOpen={isOpen} /> */}
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
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="py-3"
              >
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

      <div style={{ zIndex: "9" }}>
        <Modal
          show={isOpen}
          onHide={() => setIsOpen(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="d-flex justify-content-center" closeButton>
            <Modal.Title
              style={{ fontFamily: "Brittany Signature" }}
              id="contained-modal-title-vcenter"
            >
              <h3>Add Course</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="card px-4"
              style={{ width: "100%", height: "100%" }}
            >
              <Form className="py-5 px-3 " onSubmit={handleSubmit}>
                <Form.Group
                  accept="image/*"
                  className="mb-3 d-flex p-2 gap-5 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    accept="image/*"
                    type="file"
                    name="imageURL"
                    className="px-3 border border-info"
                    placeholder="image URL"
                    onChange={handleFileChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex p-2 gap-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="px-3 border border-info"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                  />
                  <Form.Control
                    name="description"
                    className="border border-info"
                    placeholder="description"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 d-flex p-2 gap-5 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    name="price"
                    type="number"
                    min={0}
                    className="px-3 border border-info"
                    placeholder="Price"
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center gap-2 py-3">
                  <Button
                    type="button"
                    className="btn btn-primary"
                    style={{ color: "black" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Cancle
                  </Button>

                  <Button
                    className="btn"
                    type="submit"
                    style={{ backgroundColor: "#ffc107", color: "black" }}
                    onSubmit={
                    //   () => {
                    //   dispatch(sendcourse(course)).then((res) => {
                    //     console.log(res, "response");
                    //     if (!res.error) {
                    //       navigate(`/courses/${res.payload.id}/lesson`);
                    //       setIsOpen(false);
                    //     }
                    //   });
                      // }
                      handleSubmit
                    }
                  >
                    Add
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
