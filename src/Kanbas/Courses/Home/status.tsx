import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoAnalytics } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start"><FaHome className="me-2 fs-5"/> Choose Homepage</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start"><CiStreamOn className="me-2 fs-5"/> View Course Stream</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start"><TfiAnnouncement className="me-2 fs-5"/> New Announcement</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start"><IoAnalytics className="me-2 fs-5"/> New Analytics</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start"><IoIosNotifications className="me-2 fs-5"/> View Notification</button>
      
      

    </div>
);}
