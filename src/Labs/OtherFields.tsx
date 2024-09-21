export default function OtherFields(){
    return(
        <div>
             <label htmlFor="wd-text-fields-email">Email: </label>
        <input type="email" 
               placeholder="muppasani.ee@northeastern.edu"
               id="wd-text-fields-email"/><br/>

            <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
            <input type="number"
                   id="wd-text-fields-salary-start"
                   placeholder="1000"
                   value="10000"></input><br/>
            
            <label htmlFor="wd-text-fields-rating">Rating: </label>
            <input type="range" id="wd-text-fields-rating"
                   placeholder="Eekansh"
                   max="5"
                   value="2"/><br/>
            <label htmlFor="wd-text-fields-dob"> Date of Birth: </label>
            <input type="date"
                   id="wd-text-fields-dob"
                   value="2000-01-20"></input><br/>
            <a id="wd-lipsum" href="https://www.lipsum.com">click here </a>
             to get dummy text<br/>
            <a id="wd-github" href="https://github.com/eekansh-M/kanbas-react-web-app">Click here for code repository</a>
        </div>
       
    )
}