import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="assignment-id">
      <div className="d-flex">
        <div className="assignments-float-left">
          <input type="search" className="form-control form-control-sm me-4" placeholder="Search..." />
        </div>
        <div className="assignments-float-right ms-auto">
          <button className="btn btn-secondary float-end" type="button">+ Group</button>
          <button className="btn btn-danger float-end" type="button">+ Assignment</button>
        </div>
      </div>
      <br />

      <ul id="wd-assignments" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li key={assignment.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className= "me-2 fs-3" />
                ASSIGNMENTS 40% of Total
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <a className="wd-assignment-link text-dark" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a>
                  <LessonControlButtons />
                  <div className="d-flex">
                    <p className="text-danger">Multiple Modules</p> | <b> Not available until: {assignment.avaliableUntil}</b> <span> </span> |
                  </div>
                  <p><b>Due: {assignment.dueDate}</b>| 100 pts</p>
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}