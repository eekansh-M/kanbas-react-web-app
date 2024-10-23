/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
import CourseNavigation from "./Navigation";
import Modules from "./Modules/index";
import Home from "./Home/index";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from './People/PeopleTable';
import {courses} from '../Database'
export default function index() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const {pathname} = useLocation();
  console.log(pathname.split("/").length)
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4
         mb-1" />
        {course && course.name}&gt; {pathname.split("/")[3]} &gt; {pathname.split("/")[4]} &gt; {pathname.split("/")[5]}  
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/People" element={<PeopleTable/>} />
          </Routes>
        </div></div>
    </div>
  );
}
