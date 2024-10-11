import Assignments from ".";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
    <h5>Assignment name</h5>
    <input id="wd-name" className="form-control" value="A1" />
    <br />
    <textarea className="form-control" id="wd-description">
      The assignment is available online. Submit a link to the landing page of
      your web application running on Netlify.
    </textarea>
    <br />
  
    <div className="row mb-3">
      <div className="col-4 text-end">
        <label htmlFor="wd-points">Points</label>
      </div>
      <div className="col-8">
        <input id="wd-points" className="form-control" value={100} />
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
            <input type="date" value="2000-01-20" className="form-control" />
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-6">
            <label id="wd-avaliable-from">Available from</label>
            <input type="date" id="wd-avaliable-from" value="2024-05-06" className="form-control" />
          </div>
  
          <div className="col-6">
            <label id="wd-avaliable-until">Until</label>
            <input type="date" id="wd-avaliable-until" value="2024-05-06" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  
    <hr />
    <button id="wd-cancel" className="btn btn-secondary">Cancel</button>
    <button id="wd-save" className="btn btn-primary">Save</button>
  </div>
  );
}
