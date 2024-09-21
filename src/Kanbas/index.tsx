import { Routes, Route, Navigate } from "react-router";
import Account from "./Account/index"
import Dashboard from './Dashboard'
import KanbasNavigation from "./Navigation";
import Courses from './Courses/index'
export default function Kanbas(){
return (
  <div>
    <table>
      <tr>
        <td valign="top">
          <KanbasNavigation/>
        </td>
        <td>
        <Routes>
        <Route path="/" element={<Navigate to="Account"/>} />
        <Route path="/Account/*" element={<Account/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Courses/:cid/*" element={<Courses/>}/>
        </Routes>
        </td>
    </tr>
    </table>
  </div>
);
}