// core react
const heading = React.createElement('h1',{},'Hello World from React') 
// react dom 
// to give attributes to tag --> {}
const headingWithAttr = React.createElement('h1',{id:'heading',},'Hello World from React')
//  const root = ReactDOM.createRoot(document.getElementById('root'))
//  root.render(headingWithAttr)
 console.log(heading) // Object

Eg:
{/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
     </div>   
</div> */}
 const parent = React.createElement('div',{id:'parent',},React.createElement('div',{id:'child',},React.createElement('h1',{},"I'm a h1 tag")))
 console.log(parent) //
//  const root = ReactDOM.createRoot(document.getElementById('root'))
//  root.render(parent) // is Object React.creatElement is an Object ==> becomes a HTML that Browser understands while rendering to dom --> conversion happens so Object gets converted
 Eg: 
{/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h1>
     </div>   
</div> */}
// type of element,{},children(array)
const siblings = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
    [React.createElement('h1',{},"I'm a h1 tag"),
     React.createElement('h2',{},"I'm a h2 tag")]
    )])
 console.log(siblings) //
//  const root = ReactDOM.createRoot(document.getElementById('root'))
//  root.render(siblings)
 const children = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},"I'm a h1 tag"),
        React.createElement('h2',{},"I'm a h2 tag")
    ]
    )],[
        React.createElement('div',{id:'child'},[
            React.createElement('h1',{},"I'm a h1 tag"),
            React.createElement('h2',{},"I'm a h2 tag")
        ]
        )])
        console.log(children) //
         const root = ReactDOM.createRoot(document.getElementById('root'))
         root.render(children)