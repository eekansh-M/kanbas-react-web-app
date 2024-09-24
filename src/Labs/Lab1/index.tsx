export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
          ...
        </div>
        <div id="wd-p-tag">
          <h4>Paragraph Tag</h4>
          <p id="wd-p-1"> ... </p>
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one. This is the
          second paragraph. Even though there is a deliberate white gap between
          the paragraph above and this paragraph, by default browsers render
          them as one contiguous piece of text as shown here on the right. This
          is the third paragraph. Wrap each paragraph with the paragraph tag to
          tell browsers to render the gaps.
        </div>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes: 1. Mix dry ingredients. 2. Add wet ingredients.
          3. Stir to combine. 4. Heat a skillet or griddle. 5. Pour batter onto
          the skillet. 6. Cook until bubbly on top. 7. Flip and cook the other
          side. 8. Serve and enjoy!
        </div>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
          <h1>My favorite recipe: Pasta</h1>
          <ol id="wd-your-favorite-recipe">
            <li>
              Add salt, water, and pasta on a pan. Boil the pasta until Al
              Dente.{" "}
            </li>
            <li>Strain the leftover pasta water</li>
            <li>
              Add whatever sauce you want, marinara, pesto, vodka sauce,
              whatever you want.
            </li>
            <li>Mix until fully combined</li>
            <li>
              Add basil or parmasan as seasoning and it is ready to be served
            </li>
          </ol>
          <ul id="wd-your-books">
            <li>Harry Potter and the Deathly Hallows</li>
            <li>Harry Potter and the Goblet Of Fire</li>
            <li>Percy Jackson and the lightning thief</li>
            <li>Six of Crows</li>
            <li>Ready Player One</li>
          </ul>
        </div>
        <div id="wd-tables">
          <h4>Table tag Practice: Making extra columns</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>Python</td>
                <td>3/19/21</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Q5</td>
                <td>React JS</td>
                <td>4/20/21</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Q6</td>
                <td>Angular</td>
                <td>5/14/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q7</td>
                <td>SQL</td>
                <td>6/14/21</td>
                <td>70</td>
              </tr>
              <tr>
                <td>Q8</td>
                <td>C</td>
                <td>7/30/21</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Q9</td>
                <td>C#</td>
                <td>8/20/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q10</td>
                <td>C++</td>
                <td>10/01/21</td>
                <td>70</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div id="wd-images">
          <h4>Image tag</h4>
          Loading an image from the internet:
          <br />
          <img
            id="wd-starship"
            width="400px"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          />
          <br />
          Loading a local image:
          <br />
          <img id="wd-teslabot" src="./images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
          <h4>Form Elements</h4>
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="eek123" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input id="wd-text-fields-password" value="secretIdentity" /> <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="John" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            id="wd-text-fields-last-name"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
          />
          <h5>Text boxes</h5>
          <label>Biography:</label>
          <br />
          <textarea id="wd-textarea" cols={30} rows={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </textarea>
        </div>
        <h5 id="wd-buttons">Button</h5>
        <button id="wd-all-good" onClick={() => alert("I love my life!")}>
          Hello Life
        </button>
        <h5>File upload</h5>
        <input id="wd-upload" type="file" />
        <h5 id="wd-radio-buttons">Radio Buttons</h5>
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
        <h5 id="wd-checkboxes">CheckBoxes</h5>
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
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
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
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
        <br />
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
        <h4>Other HTML field types</h4>
        <label htmlFor="wd-text-fields-email">Email: </label>
        <input
          type="email"
          placeholder="muppasani.ee@northeastern.edu"
          id="wd-text-fields-email"
        />
        <br />
        <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
        <input
          type="number"
          id="wd-text-fields-salary-start"
          placeholder="1000"
          value="10000"
        ></input>
        <br />
        <label htmlFor="wd-text-fields-rating">Rating: </label>
        <input
          type="range"
          id="wd-text-fields-rating"
          placeholder="Eekansh"
          max="5"
          value="2"
        />
        <br />
        <label htmlFor="wd-text-fields-dob"> Date of Birth: </label>
        <input type="date" id="wd-text-fields-dob" value="2000-01-20"></input>
        <br />
        <a id="wd-lipsum" href="https://www.lipsum.com">
          click here{" "}
        </a>
        to get dummy text
        <br />
        <a
          id="wd-github"
          href="https://github.com/eekansh-M/kanbas-react-web-app"
        >
          Click here for code repository
        </a>
      </div>
    );
  }
  