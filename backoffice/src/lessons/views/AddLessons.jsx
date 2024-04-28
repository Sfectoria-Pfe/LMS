import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
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
export default function AddLessons() {
  const { courseId } = useParams();
  const [typecontent, setTypeContent] = useState({})
  const [imageUrl, setImageUrl] = useState(null);
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [view,setView]=useState(null);
  const course = useSelector((state) => state.coursesSlice.course);
  const navigate = useNavigate();



  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTypeContent({ ...typecontent, [name]: name === "price" ? +value : value });
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
      setVideo(e.target.files[0]);
      setPdf(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let auxTypecontent = { ...typecontent };
    //   if (imageUrl) {
    //     const formData = new FormData();
    //     formData.append("file", imageUrl);
    //     const response = await axios.post(
    //       "http://localhost:5000/upload",
    //       formData
    //     );
    //     auxCourse = { ...auxCourse, imageURL: response.data.path };
    //   }

    //   dispatch(sendcourse(auxCourse)).then((res) => {
    //     if (!res.error)
    //       window.location.href = `http://localhost:3000/courses/details/${res.payload.id}`;
    //     else alert("you should fill the form");
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
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
            <div class="card-body">
              <p class="text- text-center">{course.title} 🧑‍💻 </p>
              <Form>
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
                    />
                  </p>

                  <hr />
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
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
                onClick={() => {
                  setView(5);
                }}
              />
            </div>
          </div>
          {view === 1 ? <Addvideo></Addvideo> : ""}
          {view === 2 ? <Addpdf></Addpdf> : ""}
          {view === 3 ? <Addexercice></Addexercice> : ""}
        </div>
      </div>
    </div>
  );
}
