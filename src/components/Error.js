import { useRouteError } from "react-router-dom";

const Error = () =>{    
const error = useRouteError();
console.error(error)
    return(
        <div>
        <h1>Oops</h1>
        <h2> Something went wrong !!</h2>
        <h3>{error.statusText} - {error.status}</h3>
        </div>
    )
}
export default Error