import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {FaEllipsisV} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment, setAssigments} from './reducer';
import GreenCheckmark from '../Modules/GreenCheckmark';
import * as coursesClient from "../client";
import * as assignmentClient from "./client"

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [courseAssignments, setCourseAssignments] = useState<any[]>([]);
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const fetchCourseAssignments = async () => {
    const assignmentsList = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssigments(assignmentsList))
  };
  useEffect(() => {
    fetchCourseAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };



  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      console.log(assignmentToDelete);
      removeAssignment(assignmentToDelete._id);
      setShowDeleteDialog(false);
      setAssignmentToDelete(null);
    }
  };

  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex mb-3">
        <div className="flex-grow-1 me-2">
          <div className="input-group w-50">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
        <button className="btn btn-secondary me-2">+ Group</button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-danger">
          + Assignment
        </Link>
      </div>

      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between align-items-center py-4">
          <h5 className="mb-0">
            <BsGripVertical className="me-2 text-muted" size={25} />
            ASSIGNMENTS
          </h5>
          <div className="position-relative">
            <h6>
              40% Finished
              <span> </span>
              <span> </span>
              <span> </span>
              <FaPlus />
            </h6>
          </div>
        </div>

        <ul className="list-group">
          {assignments.length > 0 ? (
            assignments.map((assignment: any) => (
              <li key={assignment._id} className="list-group-item py-4">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 text-muted" size={25} />
                  <FaBook className="text-muted me-3" size={25} />
                  <div className="flex-grow-1">
                    <div className="mb-1">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-decoration-none"
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                    </div>
                    <div>
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-secondary fw-bold"> | Not available until </span>
                      <span className="text-secondary">{assignment.availableFrom}</span>
                    </div>
                    <div className="text-muted">
                      Due {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <GreenCheckmark/>
                    <button 
                      className="btn btn-link text-danger me-2"
                      onClick={() => handleDeleteClick(assignment)}
                    >
                      <FaTrash />
                    </button>
                    <FaEllipsisV className="text-muted" />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item bg-light py-4">No assignments available for this course.</li>
          )}
        </ul>
      </div>
      {showDeleteDialog && (
        <div className="modal d-block" tabIndex={-1} role="dialog" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteDialog(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete "{assignmentToDelete?.title}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteDialog(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}