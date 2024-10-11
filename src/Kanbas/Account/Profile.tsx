import { Link } from "react-router-dom";
export default function Profile(){
    return (
        <div>
            <h3>Profile</h3>
            <input id="wd-username" value="eekansh" placeholder="username" className="form-control mb-2"></input>
            <input id="wd-password" value="123" placeholder="password" className="form-control mb-2"></input>
            <input id="wd-firstname" value="Eekansh" placeholder="First Name" className="form-control mb-2"></input>
            <input id="wd-lastname" value="Muppasani" placeholder="Last Name" className="form-control mb-2"></input>
            <input type="date"
                   id="wd-text-fields-dob"
                   value="2000-01-01" className="form-control mb-2"></input><br/>
            <input id="wd-email" value="muppasani.ee@northeastern.edu" placeholder="Email" className="form-control mb-2"></input>
            <button id="wd-sign-out" className="btn btn-danger text-white">
                Sign Out
            </button>
        </div>
    )
}