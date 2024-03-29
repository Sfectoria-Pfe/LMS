import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import { Droppable } from "./Droppable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchlessons } from "../../store/lesson";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Form from "react-bootstrap/Form";
import Mobile from "./component/Mobile";
import Espace from "./component/Espace";

export default function LessonsList(props) {
  const [parent, setParent] = useState(null);
  const lessons = useSelector((state) => state.lessonSlice.lessons.items);
  const [lessonList, setlessonList] = useState([])
  const [droplist, setdroplist] = useState([])
  const {courseId} = useParams()
  const dispatch = useDispatch();
  const [selecteditem,setselecteditem]=useState(null)
  useEffect(() => {
    dispatch(fetchlessons()).then((res) => {if(!res.error) setlessonList(res.payload)});
  }, [dispatch]);

  useEffect(() => {
    if(setlessonList)
    setdroplist((x) => [
    ...x,
    ...lessonList.filter((item) => item.id === selecteditem?.id),
  ]); },
  [selecteditem])
  const [type, setType] = useState("");
  const navigate = useNavigate();
// function handleDragEnd({ over }) {
//   setParent(over ? over.id : null);
// }
  

  // return (
  //   <div>
  //     <Form.Group controlId="formBasicSelect">
  //       <Form.Label>Select Norm Type</Form.Label>
  //       <Form.Control
  //         as="select"
  //         value={type}
  //         onChange={(e) => {
  //           console.log("choosen value", e.target.value);
  //           setType(e.target.value);
  //         }}
  //       >
  //         {lessons.map((lesson) => (
  //           <option>{lesson.title}</option>
  //         ))}
  //       </Form.Control>
  //     </Form.Group>
  //     <Form.Select aria-label="Default select example">
  //       {lessons.map((lesson) => (
  //         <option>{lesson.title}</option>
  //       ))}
  //     </Form.Select>
  //   </div>
  // );
  // <button onclick> next </button>;


const draggable = () => (
  <div>
    {
      lessons.map((lesson) => (
        <Draggable id="draggable" children={
          <div className="d-flex">
          <div
            className="card d-flex justify-content-center"
            style={{ width: "10rem" }}
          >
            <p className="text-center">{lesson.title}</p>
          </div>
          </div>
         }>
        
           </Draggable>
      ))}
 </div>
 
);




  return (
    <div className="d-flex justify-content-between gap-5 px-5">
      <Espace lessonList={lessonList} setlessonList={setlessonList} droplist={ droplist}  setselecteditem={setselecteditem} />

      <div className="px-5 py-4 card d-flex gap-4 ">
        {lessonList.map((lesson) => (
          <Mobile lesson={lesson} />
        ))}
      </div>
    </div>

    // {/* <h4>Add Lesson in the course</h4>
    // <DndContext onDragEnd={handleDragEnd}>
    //   {!parent ? draggable : null}
    //   <Droppable id="droppable">
    //     {parent === "droppable" ? draggable : 'Drop here'}
    //   </Droppable>
    // </DndContext> */}
  );

   
}
