import { Link } from "react-router-dom";
import reactImage from "../images/reactjs.png";
import Genalpha from "../images/GenAlpha.png";
import discrete from "../images/discete.jpg";
import mathReasoning from "../images/Mathematical-Reasoning.png";
import algorithms from "../images/algorithms.jpg";
import platformers from "../images/platformers.jpg";
import cy from "../images/cybersecurity.jpg";
import './styles.css'

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src={reactImage} width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className='col card rounded-3 overflow-hidden'>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/3456/Home">
                <img src={Genalpha} width='100%' height={160}/>
                <div className="card-body">
                  <h5 className='wd-dashboard-course-title card-title'>LING3456: Study of Gen Alpha slang</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn about how to talk to the younger generation with this
                    course.
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: '300px'}}>
            <div className="col card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/1800/Home">
                <img src={discrete} width='100%' height={160}/>
                <div className='card-body'>
                  <h5 className='wd-dashboard-course-title card-title'>CS 1800: Discrete Structures</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to CS math, probability, graphs, sorting algorithms,
                    and math logic/reasoning.
                  </p>
                  <button className='btn btn-primary'>Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course" style={{width: '300px'}}>
            <div className="col card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/1365/Home">
                <img src={mathReasoning} width='100%' height={160} />
                <div className='card-body'>
                  <h5 className='wd-dashboard-course-title card-title'>Math 1365: Introduction to Mathematical Reasoning</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to math reasoning like proofs, inductive proofs,
                    sets, and more.
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course" style={{width: '300px'}}>
            <div className="col card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/3000/Home">
                <img src={algorithms} width='100%' height={160}/>
                <div className='card-body'>
                  <h5 className='wd-dashboard-course-title card-title'>CS 3000: Algorithms and Data </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to many algorithms such as sorting algorithms,
                    dynamic programming algorithms, graphs, greedy algorithms, and
                    more.
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course" style={{width: '300px'}}>
            <div className="col card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/1709/Home">
                <img src={platformers} width='100%' height={160}/>
                <div className="card-body">
                  <h5 className='wd-dashboard-course-title card-title'>GM 1709: Introduction to Platformers </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Starts by teaching you how to play easy games like Super Mario
                    Bros and other platforming games like Hollow Knight. Nintendo
                    Switches are required for the course as most of our platformers
                    will be on there.
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course" style={{width: '300px'}}>
            <div className="col card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Course/2550/Home">
                <img src={cy} width='100%' height={160}/>
                <div className="card-body">
                  <h5 className='wd-dashboard-course-title card-title'>CY 2550: Foundations of CyberSecurity </h5>
                  <p className="wd-dashboard-course-title card-text">
                    This is an introduction to cybersecurity with many concepts such as
                    cryptography, threat modeling, CTF, Linux, and more.
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div> 
      </div>
    </div>
  );
}