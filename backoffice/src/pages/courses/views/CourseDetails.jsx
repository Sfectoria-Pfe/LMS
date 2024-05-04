import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourse } from "../../../store/courses";
import { fetchlessoncontents } from "../../../store/Lessoncontent";
import { IoIosAddCircle } from "react-icons/io";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import { CgMoreO } from "react-icons/cg";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import {
  fetchLessons,
  deletelesson,
  updatelesson,
} from "../../../store/lesson";
import { FaPen } from "react-icons/fa";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { FaTrashAlt } from "react-icons/fa";
import { Button, ClickAwayListener, Grow } from "@mui/material";

export default function CourseDetails() {


 






  const { courseId } = useParams();
  const [lessonId, setlessonId] = useState(null);
  console.log(lessonId, "lesson id");
  const course = useSelector((state) => state.coursesSlice.course);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  const LessonContent = useSelector(
    (state) => state.lessoncontentSlice.lessoncontent
  );
  console.log(course, "this is course");
  const navigate = useNavigate();
  // console.log(course?.Lesson, "those are lessons");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcourse(courseId));
    dispatch(fetchLessons());
    dispatch(fetchlessoncontents());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-wrap">
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
              <Accordion.Header className="w-100 ">
                <div className="d-flex gap-3 justify-content-between w-100 align-items-center">
                  <div className="d-flex gap-3">
                    <img
                      src={lesson.imageURL}
                      alt=""
                      style={{ width: "4rem" }}
                    />
                    <p>{lesson.title}</p>
                  </div>
                  <div className="px-4 d-flex gap-3">
                    <div>
                      <IoIosAddCircle />
                    </div>
                    <div
                      onClick={async () => {
                        dispatch(
                          updatelesson({
                            id: lesson.id,
                            body: { archived: true },
                          })
                        ).then((res) => {
                          dispatch(fetchcourse(courseId));
                        });
                      }}
                    >
                      <FaTrashAlt style={{ color: "red" }} />
                    </div>
                  
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {lesson.LessonContent.map((content) => (
                  <div className="d-flex gap-3 py-3 flex-wrap">
                    <Card className="w-100">
                      <Link
                        to={content.contentURL}
                        underline="hover"
                        className="p-2"
                      >
                        {content.contentname}
                      </Link>
                    </Card>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="text-center"></p>
        </div>
      ))}
    </div>
  );
}
