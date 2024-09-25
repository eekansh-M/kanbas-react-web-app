import { Link } from "react-router-dom";

export default function landingPage(){
    return(
        <div>
        <h1>Eekansh Muppasani, Web Development section 2</h1>

        <ul>
            <li><Link to="/Kanbas">Kanbas</Link> </li>
            <li><Link to="/Labs" id="wd-labs-link">Labs</Link></li>
            <li><a href="https://github.com/eekansh-M/kanbas-react-web-app/tree/main">Github code</a></li>
        </ul>
        </div>

        
        
    )
}