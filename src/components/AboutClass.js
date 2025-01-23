import { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";


class AboutClass extends Component{
    constructor(props){
        super(props)
        // console.log('Constructor Parent')

        this.state = {
            userInfo:{
                name:'Dummy',
                location:'Default',
            }
        };
    }
    async componentDidMount(){
        // console.log('componentDid mount parent')
        //API call
        const data = await fetch('https://api.github.com/users/fareha0402');
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo:json
        })
    }
    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        // console.log('Render Parent')
        return(<div>
            <h1>About</h1>
            <img src={avatar_url}/>
            {/* <User name={"Fareha from function"}/> */}
            <h3>Class Based</h3>
            <UserClass name={name} location={location}/>
            {/* <UserClass name={"Second"} location={"US "}/> */}
            </div>)
    }
}
export default AboutClass;