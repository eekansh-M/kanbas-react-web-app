import Assignments from ".";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import React from "react";
import { Link } from "react-router-dom";
import * as coursesClient from "../client";
import * as assignmentClient from "./client"
import { fetchAssignment } from "../../../Labs/Lab5/client";
export default function AssignmentEditor() 
{
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const assignmentList = useSelector(
    (state: any) => state.assignmentReducer?.assignments || []
  );
  
  const navigate = useNavigate();


  const existingAssignment =
    aid !== "new"
      ? assignmentList.find((a: any) => a._id === aid)
      : null;

  const [title, setTitle] = useState(existingAssignment?.title || "");
  const [description, setDescription] = useState(existingAssignment?.description || "");
  const [points, setPoints] = useState(existingAssignment?.points || 100);
  const [dueDate, setDueDate] = useState(existingAssignment?.dueDate || "");
  const [availableFrom, setAvailableFrom] = useState(existingAssignment?.availableFrom || "");
  const [availableUntil, setAvailableUntil] = useState(existingAssignment?.availableUntil || "");

  const handleSave = () => {
    if (title) {
      const updatedAssignment = {
        _id: aid,
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        course: cid,
      };
      

      if (aid === "new") {
        createAssignmentForCourse(updatedAssignment);
      } else {
        saveAssignment(updatedAssignment)
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };


  const createAssignmentForCourse = async (newAssignment: any) => {
    if (!cid) return;
    const brandNewAssignment = await coursesClient.createAssignmentForCourse(cid, newAssignment)
    dispatch(addAssignment(brandNewAssignment));
  };

  const saveAssignment = async (assignment: any) => {
    console.log(assignment)
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };



  return (
    <div id="wd-assignments-editor" >
    <h5>Assignment name</h5>

    <input
        id="wd-name"
        className="form-control"
        onChange={(e) =>
          setTitle(e.target.value)
        }
        value={title}
      />
    <br />
      <textarea
        className="form-control"
        id="wd-description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      ></textarea>
    <br />
  
    <div className="row mb-3">
      <div className="col-4 text-end">
        <label htmlFor="wd-points">Points</label>
      </div>
      <div className="col-8">
        <input id="wd-points" className="form-control" value={points} onChange={(e) => setPoints(parseInt(e.target.value) || 0)} />
      </div>
    </div>
  
    <div className="row mb-3">
      <div className="col-4 text-end">
        <label htmlFor="wd-group">Assignment Group</label>
      </div>
      <div className="col-8">
        <select id="Assignments" className="form-select">
          <option selected value="Assignments">ASSIGNMENTS</option>
        </select>
      </div>
    </div>
  
    <div className="row mb-3">
      <div className="col-4 text-end">
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
      </div>
      <div className="col-8">
        <select id="wd-display-grade-as" className="form-select">
          <option selected value="Percentage">Percentage</option>
        </select>
      </div>
    </div>
  
    <div className="card mb-3">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </div>
          <div className="col-8">
            <select id="wd-submission-type" className="form-select">
              <option selected value="Online">Online</option>
            </select>
          </div>
        </div>
  
    <div className="float-center">
        <label >Online Entry Options</label>
        <div className="form-check">
          <input type="checkbox" name="text entry" id="wd-text-entry" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="website url" id="wd-website-url" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="media recordings" id="wd-media-recordings" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="student annotation" id="wd-student-annotation" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="file uploads" id="wd-file-upload" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
        </div>
        </div>
      </div>
    </div>
  
    <div className="card mb-3">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label>Assign to</label>
          </div>
          <div className="col-8">
            <input type="email" placeholder="Everyone" id="wd-text-entry" className="form-control" />
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label>Due</label>
          </div>
          <div className="col-8">
            <input type="date" value={dueDate} className="form-control" onChange={(e) => setDueDate(e.target.value)}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label id="wd-avaliable-from">Available from</label>
            <input 
    type="date" 
    id="wd-available-from"
    value={availableFrom} 
    className="form-control" 
    onChange={(e) => setAvailableFrom(e.target.value)}
/>
          </div>
  
          <div className="col-6">
            <label id="wd-avaliable-until">Until</label>
            <input 
    type="date" 
    id="wd-available-until"
    value={availableUntil} 
    className="form-control" 
    onChange={(e) => setAvailableUntil(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  
    <hr />
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button id="wd-cancel" className="btn btn-secondary me-2">
          Cancel
        </button>
      </Link>
      <button
        onClick={handleSave}
        type="button"
        id="wd-save"
        disabled={!title}
        className="btn btn-primary me-2"
      >
        Save
      </button>
  </div>
  );}
