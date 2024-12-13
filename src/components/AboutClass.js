import { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";


class AboutClass extends Component{
    constructor(props){
        super(props)
        console.log('Constructor Parent')
    }
    componentDidMount(){
        console.log('componentDid mount parent')
    }
    render(){
        console.log('Render Parent')
        return(<div>
            <h1>About</h1>
            {/* <User name={"Fareha from function"}/> */}
            <h3>Class Based</h3>
            <UserClass name={"First"} location={"Gurgaon "}/>
            <UserClass name={"Second"} location={"US "}/>
            </div>)
    }
}
export default AboutClass;