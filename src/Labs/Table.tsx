export default function Table(){
  return (
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
  )
   
}