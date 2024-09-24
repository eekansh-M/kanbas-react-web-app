import { Link } from "react-router-dom";

export default function landingPage(){
    return(
        <div>
        <h1>Eekansh Muppasani, Web Development section</h1>

        <ul>
            <li><Link to="/Kanbas">Kanbas</Link> </li>
            <li><Link to="./Labs/TOC">Labs</Link></li>
            <li><a href="https://github.com/eekansh-M/kanbas-react-web-app">Github code</a></li>

        </ul>
        </div>

        
        
    )
}