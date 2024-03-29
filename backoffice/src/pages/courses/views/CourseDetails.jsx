import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourse } from "../../../store/courses";
import { Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";

export default function CourseDetails() {
  const { id } = useParams();
  const course = useSelector((state) => state.coursesSlice.course);
  console.log(course, "this is course");
  // console.log(course?.Lesson, "those are lessons");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcourse(id));
  }, [dispatch]);

  return (
    <div>
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

      <div className="d-flex justify-content-center ">
        <video
          id="bannerVideo"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "40rem" }}
          className="px-5"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* <div>
          <video src={video1} autoplay="true" />
        </div> */}
      </div>
      <p className="px-5 py-4">Description: {course?.description}</p>
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
              <Accordion.Header>{lesson.title}</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-center">
                  <img
                    src={lesson.imageURL}
                    alt=""
                    style={{ width: "50rem", height: "25rem" }}
                  />
                </div>
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
