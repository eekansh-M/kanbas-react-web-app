import { Link } from "react-router-dom";
export default function Profile(){
    return (
        <div>
            <h3>Profile</h3>
            <input id="wd-username" value="eekansh" placeholder="username"></input><br/>
            <input id="wd-password" value="123" placeholder="password"></input><br/>
            <input id="wd-firstname" value="Eekansh" placeholder="First Name"></input><br/>
            <input id="wd-lastname" value="Muppasani" placeholder="Last Name"></input><br/>
            <input type="date"
                   id="wd-text-fields-dob"
                   value="2000-01-01"></input><br/>
            <input id="wd-email" value="muppasani.ee@northeastern.edu" placeholder="Email"></input>
            <select id="wd-role">
                <option>User</option>
                <option>Admin</option>
                <option>Faculty</option>
                <option>Student</option>
            </select><br/>
            <Link to="/Kanbas/Account/Signin">Sign out</Link>
        </div>
    )
}