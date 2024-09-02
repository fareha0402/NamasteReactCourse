import React from "react"
import ReactDOM from "react-dom/client"

const jsxheading =(<h1 id="heading" className="head">
    Hello from JSX
    </h1>)
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(jsxheading)

//React element
const element = (
    <h1 id="heading" className="head">
        Hello from JSX
        </h1>
        ) 

// React component
const Title = () => (
<h1 id="heading" className="head">
    Hello from JSX
    </h1>
    )

// React functional component is- normal func which return some JSX or piece of jsx
const HeadingComponent = () =>{
    return <h1>Hello from React Functional component</h1>
} // SYNTAX 1
// a JS func which returen react element -- functional component

// if we don't return or it's single line code
const HeadingComponent1 = () =>(
<div id="contaier">
<Title/>
<h1>Hello from React Functional component</h1>
</div>
)
//SYNTAX 2
//both syntax 1 and 2 are same

root.render(<HeadingComponent1/>)