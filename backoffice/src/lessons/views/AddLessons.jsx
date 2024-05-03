import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { sendlesson, fetchLessons } from "../../store/lesson";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";
import { MdVideoLibrary } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import View1 from "./component/AddContent/Addvideo";
import Addvideo from "./component/AddContent/Addvideo";
import Addpdf from "./component/AddContent/Addpdf";
import Addexercice from "./component/AddContent/Addexercice";
import axios from "axios";
export default function AddLessons() {
  const { courseId } = useParams();
  const [typecontent, setTypeContent] = useState({});
  const [imageUrl, setImageUrl] = useState(null);

  const [videoUrl, setVideo] = useState(null);

  const [lesson, setlesson] = useState({});
  const [pdf, setPdf] = useState(null);
  const [view, setView] = useState(null);
  const course = useSelector((state) => state.coursesSlice.course);
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlesson({ ...lesson, [name]: name === "price" ? +value : value });
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
    }
  };
  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideo(e.target.files[0]);
    }
  };

  //submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let auxlesson = { ...lesson, courseId:+courseId };
      if (imageUrl) {
        const formData = new FormData();
        formData.append("file", imageUrl);
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        auxlesson = { ...auxlesson, imageURL: response.data.path };
      }
      if (videoUrl) {
        const formData = new FormData();
        formData.append("file", videoUrl);
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        auxlesson = {
          ...auxlesson,
          contents: [
            {
              contentURL: response.data.path,
              type: "video",
              contentname: "khalil",
            },
          ],
        };
      }
      console.log(auxlesson);

      dispatch(sendlesson(auxlesson)).then((res) => {
        if (!res.error)
          window.location.href = `http://localhost:3000/courses/details/${courseId}`;
       
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, [dispatch]);

  return (
    <div>
      <h3
        className="p-5"
        style={{
          fontFamily: "Segoe UI",
          color: "#11354D",
          textDecoration: "underline",
        }}
      >
        Add a lesson to {course?.title} course
      </h3>
      <div class="container py-3 d-flex justify-content-center">
        <div style={{ width: "65rem" }} class="col-lg-8">
          <div class="card mb-4">
            <Form onSubmit={handleSubmit}>
              <div class="card-body">
                <p class="text- text-center">{course?.title} 🧑‍💻 </p>

                <FormGroup
                  className="mb-3 d-flex justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Image</Form.Label>
                  <p class="text-muted mb-0">
                    <Form.Control
                      accept="image/*"
                      type="file"
                      name="imageURL"
                      className="px-3 border border-info"
                      placeholder="image URL"
                      required
                      onChange={handleImageChange}
                    />
                  </p>

                  <hr />
                  <Form.Label>Title</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="text"
                      name="title"
                      placeholder="title of session"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </p>

                  <hr />
                </FormGroup>
              </div>
              <div class="container py-2 d-flex justify-content-center">
                <div style={{ width: "65rem" }} class="col-lg-8">
                  <h3 className="text-center">Lesson content</h3>

                  <div
                    className="justify-content-center d-flex gap-5 py-5"
                    style={{ fontSize: "3rem", color: "#ffc801" }}
                  >
                    <div
                      style={{
                        borderColor: "#00184b",
                        border: "2px solid",
                        width: "5rem",
                        textAlign: "center",
                      }}
                    >
                      <button
                        type="button"
                        style={{ all: "unset" }}
                        onClick={() => {
                          setView(1);
                        }}
                      >
                        <MdVideoLibrary />
                      </button>
                    </div>
                    <div
                      style={{
                        borderColor: "#00184b",
                        border: "2px solid",
                        width: "5rem",
                        textAlign: "center",
                      }}
                    >
                      <FaFilePdf
                        type="button"
                        onClick={() => {
                          setView(2);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderColor: "#00184b",
                        border: "2px solid",
                        width: "5rem",
                        textAlign: "center",
                      }}
                    >
                      <FaCode
                        type="button"
                        onClick={() => {
                          setView(3);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderColor: "#00184b",
                        border: "2px solid",
                        width: "5rem",
                        textAlign: "center",
                      }}
                    >
                      <MdQuiz
                        type="button"
                        onClick={() => {
                          setView(4);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        border: "2px solid",
                        borderColor: "#00184b",
                        width: "5rem",
                        textAlign: "center",
                      }}
                    >
                      <AiOutlineFundProjectionScreen
                        type="button"
                        onClick={() => {
                          setView(5);
                        }}
                      />
                    </div>
                  </div>
                  {view === 1 ? (
                    <div class="card-body">
                      <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormGroup
                          className="mb-3 d-flex justify-content-between"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>video</Form.Label>
                          <p class="text-muted mb-0">
                            <Form.Control
                              accept="video/*"
                              type="file"
                              name="video"
                              className="px-3 border border-info"
                              placeholder="image URL"
                              required
                              onChange={handleVideoChange}
                            />
                          </p>
                          <Form.Label>video Name</Form.Label>
                          <p class="text-muted mb-0">
                            <input
                              type="text"
                              name="pdfName"
                              placeholder="Video Name"
                              className="form-control"
                              required
                            />
                          </p>

                          <hr />
                        </FormGroup>

                        {/* <div class="d-flex justify-content-center">
              <Button style={{ width: "7rem" }} variant="warning" type="submit">
                Save
              </Button>
             </div> */}
                      </FormGroup>
                    </div>
                  ) : (
                    ""
                  )}
                  {view === 2 ? (
                    <FormGroup
                      className="mb-3 d-flex justify-content-between"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>pdf</Form.Label>
                      <p class="text-muted mb-0">
                        <Form.Control
                          accept="pdf/*"
                          type="file"
                          name="pdf"
                          className="px-3 border border-info"
                          placeholder="pdf"
                          required
                        />
                      </p>

                      <hr />
                      <Form.Label>pdf name</Form.Label>
                      <p class="text-muted mb-0">
                        <input
                          type="text"
                          name="pdfName"
                          placeholder="title of session"
                          className="form-control"
                          required
                        />
                      </p>

                      <hr />
                    </FormGroup>
                  ) : (
                    ""
                  )}
                  {view === 3 ? (
                    <FormGroup
                      className="mb-3 d-flex justify-content-between"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Exercice</Form.Label>
                      <p class="text-muted mb-0">
                        <textarea
                          style={{ width: "30rem" }}
                          class="form-control"
                          className="px-3 "
                          id="exampleFormControlTextarea1"
                          rows="3"
                          required
                          name="exercice"
                          placeholder="exercice"
                        ></textarea>
                      </p>

                      <hr />
                      <Form.Label>Exercice Name</Form.Label>
                      <p class="text-muted mb-0">
                        <input
                          type="text"
                          name="exerciceName"
                          placeholder="exercice name"
                          className="form-control"
                          required
                        />
                      </p>

                      <hr />
                    </FormGroup>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div class="d-flex justify-content-center py-3">
                <Button
                  style={{ width: "7rem" }}
                  variant="warning"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
