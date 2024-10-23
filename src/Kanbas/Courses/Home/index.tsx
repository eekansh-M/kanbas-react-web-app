import Modules from "../Modules"
import CourseStatus from "./status"
export default function Home(){
    return(
        <div className="d-flex" id='wd-home'>
            <div className='flex-fill' style={{padding: '20px'}}>
                <Modules/>
            </div>
            <div className='d-none d-md-block'>
                <CourseStatus/>
            </div>
        </div>
    )
}