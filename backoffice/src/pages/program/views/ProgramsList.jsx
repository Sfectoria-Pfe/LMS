// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchprograms , deleteprogram } from "../../../store/Program";
// import Card from "react-bootstrap/Card";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Button, Modal } from "bootstrap";

// export default function ProgramsList() {
//   const programs = useSelector((state) => state.ProgramSlice.programs.items);
//    const [modalShow, setModalShow] = useState(false);
//    const [deletedId, setDeletedId] = useState("");

//   console.log(programs);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchprograms());
//   }, [dispatch]);

//    const deleteprogram = (id) => {
//      dispatch(deleteprogram(id));
//      window.location.reload();
//    };

//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="px-5">
//         <button className="btn btn-primary" onClick={() => navigate("add")}>
//           Add program
//         </button>
//       </div>
//       <div className="d-flex flex-wrap justify-content-between px-5 py-5 gap-5 ">
//         {programs.map((card) => (
//           <Card style={{ width: "20rem", height: "35rem" }}>
//             <Card.Img
//               variant="top"
//               src={card.imageURL}
//               style={{ height: "12rem" }}
//               className="thumb-img"
//             />
//             <Card.Body>
//               <Card.Title style={{ width: "18rem" }}>{card.title}</Card.Title>
//               <Card.Text className="py-3" style={{ width: "18rem" }}>
//                 {card.description}
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Link to={`${card.id}`}>
//                   <button className="btn btn-primary">See more</button>
//                 </Link>
//                 <button className="btn btn-warning">Update</button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => {
//                     setModalShow(true);
//                     setDeletedId(card.id);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>

//       <Modal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Delete course
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Are you sure you want to delete this program ?</p>
//         </Modal.Body>
//         <div className="d-flex justify-content-center gap-2 py-3">
//           <Button onClick={() => setModalShow(false)}>Cancle</Button>

//           <Button
//             className="btn btn-danger"
//             onClick={() => {
//               deleteprogram(deletedId);
//               setModalShow(false);
//             }}
//           >
//             Delete
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteprogram, fetchprograms } from "../../../store/Program";
import Card from "react-bootstrap/Card";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ProgramsList() {
  const programs = useSelector((state) => state.ProgramSlice.programs.items);
  const [modalShow, setModalShow] = useState(false);
  const [deletedId, setDeletedId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprograms());
  }, [dispatch]);

  const deleteProgram = (id) => {
    dispatch(deleteprogram(id));
  };

  const navigate = useNavigate();
  const deletedIdfunc = (id) => {
    setDeletedId(id);
  };
  return (
    <div>
      <div className="px-5">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add program
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center py-5 gap-5 ">
        {programs.map((card) => (
          <Card style={{ width: "21rem", height: "34rem" }}>
            <Card.Img
              variant="top"
              src={card.imageURL}
              style={{ height: "12rem" }}
              className="thumb-img"
            />
            <Card.Body>
              <Card.Title style={{ width: "18rem", height: "5rem" }}>
                {card.title}
              </Card.Title>
              <Card.Text style={{ width: "18rem", height: "11rem" }}>
                {card.description}
              </Card.Text>
              <div className="d-flex flex-wrap gap-3">
                <Link to={`${card.id}`}>
                  <button className="btn btn-primary">See more</button>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    navigate(`update/${card.id}`);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setModalShow(true);
                    deletedIdfunc(card.id);
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
              deleteProgram(deletedId);
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
