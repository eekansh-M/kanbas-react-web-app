import { Routes, Route, Navigate} from "react-router";
import {useEffect, useState} from "react"
import Account from "./Account/index";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses/index";
import './styles.css'
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Kanbas() {
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const [courses, setCourses] = useState<any[]>([])

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const coursesList = await courseClient.fetchAllCourses();
      setCourses(coursesList);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);





  const addNewCourse = async () => {
    let newCourse = { ...course, _id: new Date().getTime().toString() };
    newCourse = await courseClient.createCourse(course); 
    setCourses([...courses, newCourse]);
    fetchCourses()
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    fetchCourses()
  };

 
  return (
    <div id='wd-kanbas'>
      <KanbasNavigation />
      <div className='wd-main-content-offset p-3'>
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute>
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          </ProtectedRoute>}/>
          <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
  );
}