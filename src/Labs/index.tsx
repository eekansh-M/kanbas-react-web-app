import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1/index";
import TOC from "./TOC";
import Lab2 from "./Lab2/index";
import Lab3 from "./Lab3/index";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}