import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation(){
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"]; 
      const { pathname } = useLocation();
      console.log(cid)
    return(
        <div id="wd-courses-navigation" className='wd list-group fs-5 rounded-0'>
            {links.map((link)=> (
                <Link id={cid} to={`/Kanbas/Courses/${cid}/${link}`}
                className="list-group-item text-danger border border-0">{link}</Link>
            ))}

        </div>
    )
}