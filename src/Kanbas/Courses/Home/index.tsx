import Modules from "../Modules"
import CourseStatus from "./status"
export default function Home(){
    return(
        <table>
            <tr>
                <td valign="top">
                    <Modules/>
                </td>
                <td>
                    <CourseStatus/>
                </td>
            </tr>
        </table>
    )
}