import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";

export default function AddLessons() {
  const { courseId } = useParams();
  const [typecontent, setTypeContent] = useState({})
  const [imageUrl, setImageUrl] = useState(null);
  const [video, setVideo] = useState(null);
   const [pdf, setPdf] = useState(null);
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

      <div class="container py-5 d-flex justify-content-center">
        <div style={{ width: "65rem" }} class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <Form>
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
                      />
                    </p>

                    <hr />
                  </FormGroup>

                  <hr />
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

                  <hr />

                  <div class="d-flex justify-content-center">
                    <Button
                      style={{ width: "7rem" }}
                      variant="warning"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
