import React from 'react'
import { useDrop } from 'react-dnd';

export default function Espace({ lessonList, setlessonList, droplist, setselecteditem}) {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "lesson",
      drop: (item) => addItemToSection(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    const addItemToSection = (elem) => {
      setlessonList(lessonList.filter(item => item.id !== elem.id))
      setselecteditem(elem)
      console.log("droped", elem);
    };
    console.log(droplist, "droplist");
  return (
 
      <div
        className={`card rounded-md  ${isOver ? "bg-secondary" : ""}`}
        style={{ width: "50rem" }}
        ref={drop}
      >
        {droplist.map((lesson) => (
          <div
            className={`card d-flex justify-content-center  `}
            style={{ width: "20rem" }}
          >
            <p className="text-center">{lesson.title}</p>
          </div>
        ))}
      </div>
  );
}
