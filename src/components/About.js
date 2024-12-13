import User from "./User.js"
import UserClass from "./UserClass.js"

const About = () =>{
    return(
        <div>
        <h1>About</h1>
        <User name={"Fareha from function"}/>
        <h3>Class Based</h3>
        <UserClass name={"Fareha from class"} location={"Gurgaon class "}/>
        </div>
    )
}
export default About 