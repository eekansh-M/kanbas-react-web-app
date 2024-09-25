import Assignments from ".";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h5>Assignment name</h5>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is avaliable online. Submit a link to the landing page of
        your web application running on Netlify.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br/>
     
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>

          <td>
            <select id="Assignments">
              <option selected value="Assignments">
                ASSIGNMENTS
              </option>
            </select>
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>

          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
            </select>
          </td>
        </tr><br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>

          <td>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
            </select>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" name="text entry" id="wd-text-entry" />
            <label htmlFor="wd=text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="website url" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="media recordings"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="student annotation"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="file uploads" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <label>Assign to</label>
            <br />
            <input type="email" placeholder="Everyone" id="wd-text-entry" />
          </td>
        </tr><br/>
        <tr>
            <td></td>
          <td>
            <label>Due</label><br/>
            <input type="date" value="2000-01-20" />
          </td>
        </tr><br/>
        <tr>
          <td>
            <label id="wd-avaliable-from">Avaliable from</label><br/>
            <input type="date" id="wd-avaliable-from" value="2024-05-06" />
          </td>

          <td>
            <label id="wd-avaliable-from">Until</label><br/>
            <input type="date" id="wd-avaliable-until" value="2024-05-06" />
          </td>
        </tr>
      </table>
      <hr />
      <button id="wd-cancel">Cancel</button> <button id="wd-save">Save</button>
    </div>
  );
}
