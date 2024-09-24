import { Link } from "react-router-dom";
import reactImage from "../images/reactjs.png"; 
import Genalpha from "../images/GenAlpha.png";
import discrete from '../images/discete.jpg'
import mathReasoning from '../images/Mathematical-Reasoning.png';
import algorithms from '../images/algorithms.jpg'
import platformers from '../images/platformers.jpg';
import cy from '../images/cybersecurity.jpg';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <h2>Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Courses/1234/Assignments"
        />
        <img src={reactImage} width={200} />
        <div>
          <h5> <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Courses/1234/Assignments"
        >CS1234 React JS</Link></h5>
          <p className="wd-dashboard-course-title">
            Full stack software developer
          </p>
          <button>Go</button>
        </div>
      </div>
      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/3456/Home"
        />
        <img src={Genalpha} width={200} />
        <div>
          <h5>LING3456: Study of Gen Alpha slang</h5>
          <p className="wd-dashboard-course-title">
            Learn about how to talk to the younger generation with this course.
          </p>
          <button>Go</button>
        </div>
      </div>

      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/1800/Home"
        />
        <img src={discrete} width={200} />
        <div>
          <h5>CS 1800: Discrete Structures</h5>
          <p className="wd-dashboard-course-title">
            Introduction to CS math, probability, graphs, sorting algorithms,
            and math logic/reasoning.
          </p>
          <button>Go</button>
        </div>
      </div>


      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/1365/Home"
        />
        <img src={mathReasoning} width={200} />
        <div>
          <h5>Math 1365: Introduction to Mathamatical Reasoning</h5>
          <p className="wd-dashboard-course-title">
            Introduction to math reasoning like proofs, inductive proofs, sets, and more. 
          </p>
          <button>Go</button>
        </div>
      </div>

      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/3000/Home"
        />
        <img src={algorithms} width={200} />
        <div>
          <h5>CS 3000: Algorithms and Data </h5>
          <p className="wd-dashboard-course-title">
           Introduction to many algorithms such as sorting algorithms, dynamic programming algorithms, graphs, greedy algorithms, and more. 
          </p>
          <button>Go</button>
        </div>
      </div>

      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/1709/Home"
        />
        <img src={platformers} width={200} />
        <div>
          <h5>GM 1709: Introduction to platformers </h5>
          <p className="wd-dashboard-course-title">
           Starts by teaching you how to play easy games like Super Mario Bros and other platforming games like Hollow Knight. 
           Nintendo Switches are required for the course as most of out platformers will be on there
          </p>
          <button>Go</button>
        </div>
      </div>

      <div className="wd-dashboard-course">
        <Link
          className="wd-dashboard-course-link"
          to="/Kanbas/Course/2550/Home"
        />
        <img src={cy} width={200} />
        <div>
          <h5>CY 2550: Foundations of CyberSecurity </h5>
          <p className="wd-dashboard-course-title">
           This is a introduction to cybersecurity with many concepts such as cryotgraphy, threat modeling, CTF, Linux, and more. 
          </p>
          <button>Go</button>
        </div>
      </div>






    </div>
  );
}