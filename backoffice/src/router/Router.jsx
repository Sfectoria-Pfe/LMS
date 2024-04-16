import React, { useState, createContext, useEffect } from "react";
import App from "../apps/App";
import Dashboard from "../pages/Dashboard";
import Auth from "../apps/auth";
import Course from "../pages/courses/Courses";
import Session from "../pages/sessions/Sessions";
import NotFound from "../pages/NotFound";
import Users from "../pages/users/Users";
import AllUsers from "../pages/users/views/AllUsers";
import AddUser from "../pages/users/views/AddUser";
import UserDetails from "../pages/users/views/UserDetails";
import AddCourse from "../pages/courses/views/AddCourse";
import CourseList from "../pages/courses/views/CourseList";
import CourseDetails from "../pages/courses/views/CourseDetails";
import SessionList from "../pages/sessions/views/SessionList";
import SessionDetails from "../pages/sessions/views/SessionDetails";
import Profile from "../pages/profile/Profile";
import ProfileDetails from "../pages/profile/views/ProfileDetails";
import EditProfile from "../pages/profile/views/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import Programs from "../pages/program/Programs";
import ProgramsList from "../pages/program/views/ProgramsList";
import AddProgram from "../pages/program/views/AddProgram";
import ProgramDetails from "../pages/program/views/ProgramDetails";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "../pages/auth/Login";
import Spinner from "react-bootstrap/Spinner";
import { getMe } from "../store/auth";
import EditUser from "../pages/users/views/EditUser";
import Student from "../pages/students/Student";
import AllStudents from "../pages/students/views/AllStudents";

import LessonsList from "../lessons/views/LessonsList";
import AddLessons from "../lessons/views/AddLessons";


import UpdateCourse from "../pages/courses/views/UpdateCourse";
import UpdateProgram from "../pages/program/views/UpdateProgram";
import AddSession from "../pages/sessions/views/AddSession";

export const UserContext = createContext();

export default function Router() {
  const user = useSelector((store) => store.auth.me);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token)
      dispatch(getMe()).then((res) => {
        setIsLoading(false);
      });
    else {
      setIsLoading(false);
    }
  }, [dispatch]);
  return (
    <>
      {isLoading && (
        <div
          className="position-fixed h-100 w-100 bg-white justify-content-center d-flex align-items-center"
          style={{ zIndex: 6 }}
        >
          <Spinner animation="border" />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route>
            {user ? (
              <Route path="/" element={<App />}>
                <Route index element={<Dashboard />} />
                <Route path="courses" element={<Course />}>
                  <Route index element={<CourseList />} />
                  {/* <Route path="add" element={<AddCourse />} /> */}
                  <Route path="details/:id" element={<CourseDetails />} />
                  <Route path=":courseId/lesson" element={<LessonsList />} />
                  <Route path="update/:id" element={<UpdateCourse />} />
                  <Route path="add" element={<AddLessons />} />
                </Route>
                <Route path="profile" element={<Profile />}>
                  <Route index element={<ProfileDetails />} />
                  <Route path="edit" element={<EditProfile />} />
                </Route>
                <Route path="programs" element={<Programs />}>
                  <Route index element={<ProgramsList />} />
                  <Route path="add" element={<AddProgram />} />
                  <Route path=":id" element={<ProgramDetails />} />
                  <Route path="update/:id" element={<UpdateProgram />} />
                </Route>

                <Route path="sessions" element={<Session />}>
                  <Route index element={<SessionList />} />
                  <Route path=":sessionId" element={<SessionDetails />} />
                  <Route path="add" element={<AddSession />} />
                </Route>

                <Route path="users" element={<Users />}>
                  <Route index element={<AllUsers />} />
                  <Route path="adduser" element={<AddUser />} />
                  <Route path="userdetails/:id" element={<UserDetails />} />

                  <Route path="edituser/:id" element={<EditUser />} />
                  <Route path="student" element={<Student />} />
                </Route>
              </Route>
            ) : (
              <Route path="/" element={<Auth />}>
                <Route index element={<Login />} />
              </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
