import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchLessons } from "../../store/lesson";
import Sortable from "./component/Sortable";

export default function LessonsList() {
  const dispatch = useDispatch();

  const lessons = useSelector((state) => state.lessonSlice.lessons);

  const [lessonList, setlessonList] = useState([
    {
      id: 1,
      title: "Choosen",
      tasks: [],
    },
    {
      id: 2,
      title: "Lessons",
      tasks: [],
    },
  ]);

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  useEffect(() => {
    setlessonList([
      { id: 0, title: "choosen", tasks: [] },
      {
        id: 1,
        title: "Lessons",
        tasks: [...JSON.parse(JSON.stringify(lessons.items))],
      },
    ]);
  }, [lessons]);

  return (
    <div className="d-flex justify-content-between p-5">
      
      <Sortable
        id={lessonList[0].id}
        title={lessonList[0].title}
        tasks={lessonList[0].tasks}
        list={lessonList}
        setList={setlessonList}
      />
      <Sortable
        id={lessonList[1].id}
        title={lessonList[1].title}
        tasks={lessonList[1].tasks}
        list={lessonList}
        setList={setlessonList}
      />
    </div>
  );
}
