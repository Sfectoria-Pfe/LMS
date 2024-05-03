import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourse } from "../../../store/courses";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = useSelector((state) => state.coursesSlice.course);
  console.log(course, "this is course");
  const navigate = useNavigate();
  // console.log(course?.Lesson, "those are lessons");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcourse(courseId));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className="px-5 py-4" style={{ fontSize: "2rem" }}>
            {course?.title}
          </p>
          <p className=" py-4" style={{ fontSize: "2rem", color: "#42b1bc" }}>
            |
          </p>
          <p
            className=" py-4"
            style={{
              fontSize: "2rem",
              color: "#42b1bc",
              fontFamily: "Brittany Signature",
            }}
          >
            BY SFECTORIA
          </p>
        </div>
        <div className=" p-5">
          <button
            className="btn"
            style={{ backgroundColor: "#ffc107" }}
            onClick={() => {
              navigate(`/courses/${courseId}/lesson/add`);
            }}
          >
            + Add new lesson
          </button>
          {/* <AddCourse setIsOpen={setIsOpen} isOpen={isOpen} /> */}
        </div>
      </div>
      {course?.videoURL && (
        <video
          id="bannerVideo"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "40rem" }}
          className="px-5"
        >
          <source src={course?.videoURL} type="video/mp4" />
        </video>
      )}
      <div className="d-flex justify-content-center ">
        {/* <MDBContainer>
          <div className="ratio ratio-16x9">
            <iframe
              src={course?.videoURL}
              title="Vimeo video"
              allowfullscreen
            ></iframe>
          </div>
        </MDBContainer> */}

        {/* <div>
          <video src={video1} autoplay="true" />
        </div> */}
      </div>
      <p className="px-5 py-4">Description:{course?.description}</p>
      {/* <h1
        className="text-center py-5"
        style={{
          fontFamily: "Brittany Signature",
          fontSize: "4rem",
          color: "#42b1bc",
        }}
      >
        Lessons
      </h1> */}

      {course?.Lesson.map((lesson) => (
        <div className="px-3">
          <Accordion className=" d-flex justify-content-center">
            <Accordion.Item eventKey="0" className="w-100">
              <Accordion.Header>
                <div className="d-flex gap-3">
                  <img src={lesson.imageURL} alt="" style={{ width: "4rem" }} />
                  <p>{lesson.title}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card style={{ width: "19rem", height: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src=""
                    style={{ height: "11rem" }}
                    className="thumb-img"
                  />
                  <Card.Body>
                    <Card.Title style={{ width: "18rem", height: "4rem" }}>
                      Video
                    </Card.Title>
                    <Card.Text style={{ width: "18rem", height: "7rem" }}>
                      hh
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="text-center"></p>
        </div>
      ))}
    </div>
  );
}
