export default function Button(){
    return (
      <div>
        <h5>Button</h5>
        <button id="wd-all-good" onClick={() => alert("I love my life!")}>
          Hello Life
        </button>
        <h5>Radio Buttons</h5>
        <label>Favorite Movie Genre</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label> <br />
        <input type="radio" name="radio-genre" id="wd-radio-drama" />
        <label htmlFor="wd-radio-drama">Drama</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-scifi" />
        <label htmlFor="wd-radio-scifi">Science Fiction</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
        <h5>CheckBoxes</h5>
        <label>Favorite Book genre</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label id="wd-chkbox-drama">Drama</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label id="wd-chkbox-scifi">Science Fiction</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label id="wd-chkbox-fantasy">Fantasy</label>
        
        <h5>Dropdown, Select One</h5>
        <label htmlFor="wd-select-one-genre">Favorite movie genre</label>
        <br />
        <select id="wd-select-one-genre">
          <option selected value="Comedy">
            Comedy
          </option>
          <option value="Drama">Drama</option>
          <option value="SCIFI">Science fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
        <select id="wd-select-many-genre" multiple>
          <option selected value="COMEDY">
            Comedy
          </option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
      </div>
    );
}