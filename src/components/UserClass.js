import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
            console.log('ConstructorChild', props.name)
        this.state={
            count:0,
            count1:1
        };
    }
    componentDidMount(){
        console.log('componentDid mount child',this.props.name)
    }
    render(){
        console.log('Render child',this.props.name)
        return(
        <div className="p-3 border border-black bottom-1">
        <h1>Name:{this.props.name} </h1>
        <h1>Counter:{this.state.count} </h1>
        <button className="bg-green-100" onClick={() =>{
            // Never update state variables directly
            this.setState({
                count:this.state.count+1,
                count1:this.state.count1+1
            })
        }}>Count increase</button>
        <h1>Location:{this.props.location}</h1>
        <h1>Contact:fareha0402@gmail.com</h1>
    </div>
        )
    }
}
export default UserClass