import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddLessons() {
  const { courseId } = useParams();
  const course = useSelector((state) => state.coursesSlice.course);
   const navigate = useNavigate();
  return (
    <div>
      
    </div>
  )
}
