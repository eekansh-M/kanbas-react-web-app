import {Link} from "react-router-dom";
export default function Signup(){
    return (
        <div id="wd-signup-screen">
            <h1>Signup</h1>
            <input placeholder="username" className="form-control mb-2"/>
            <input placeholder="password" className="form-control mb-2"/>
            <input placeholder="verify password" type="password" className="form-control mb-2"/>
            <Link to="/Kanbas/Account/Profile"><button className="btn btn-primary w-100">Sign up</button></Link>
            
        </div>
    )
}

