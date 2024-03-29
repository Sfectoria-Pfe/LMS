import { Button, Modal } from 'bootstrap';
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';

export default function PopUp(props) {
    //  const course = useSelector((state) => state.coursesSlice.course);
    // const dispatch = useDispatch();
    // const [modalShow, setModalShow] = useState(false);
  
//    const handleDelete = (props.id) =>{
//      dispatch(deletecourse(props.id));
//      console.log(props.id);  
//    };
  return (
    <div>
      <Modal
        {...props}
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
          <Button >Cancle</Button>
          <Button className="btn btn-danger" >
            Delete
          </Button>
        </div>
      </Modal>
     
    </div>
  );
}
 