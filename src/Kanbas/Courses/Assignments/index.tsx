import {BsGripVertical} from "react-icons/bs"
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments(){
    return (
        <div id="assignment-id">
  <div className="d-flex">
    <div className="assignments-float-left">
    <input type="search" className="form-control form-control-sm me-4" placeholder="Search..."/>
    </div>
    <div className="assignments-float-right ms-auto">
    <button className="btn btn-secondary float-end" type="button">+ Group</button>
    <button className="btn btn-danger float-end" type="button">+ Assignment</button>
    </div>  
    </div>
<br/> 

            <ul id="wd-assignments" className="list-group rounded-0">

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3"/>
                 ASSIGNMENTS  40% of Total 
                </div>

            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <a className="wd-assignment-link text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                A1</a><LessonControlButtons/>
                     <div className="d-flex"><p className="text-danger">Multiple Modules</p> | <b> Not avaliable until: </b> May 6 at 12:00am |</div>
                    <p><b>Due</b> May 20 at 11:59pm | 100 pts</p> 
                    </li>
                    <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>

                <a className="wd-assignment-link text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                A2</a> <LessonControlButtons/>
            
                <div className="d-flex"><p className="text-danger">Multiple Modules </p> <p>| </p> <b> Not avaliable until: </b> May 6 at 12:00am |</div>
                    <p><b>Due</b> May 20 at 11:59pm | 100 pts</p> 
                            </li>

                    <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <a className="wd-assignment-link text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                A3</a><LessonControlButtons/>
                <div className="d-flex"><p className="text-danger">Multiple Modules </p> |  <b> Not avaliable until: </b> May 6 at 12:00am | </div>
                    <p><b>Due</b> May 20 at 11:59pm | 100 pts</p> 
                    </li>       
                </ul>
                </ul>
            </li>
            </ul>
        </div>
    );
}