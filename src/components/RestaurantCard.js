import { useContext } from "react"
import { CDN_URL } from "../Utils/constants"
import UserContext from "../Utils/UserContext"
const RestaurantCard = (props) =>{
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props // Destructuring
    // const resItem = props.resData.info
    // console.log(resData)
    const imgSrc= CDN_URL + resData.info.cloudinaryImageId
    return(
        <div className="w-[250px] m-4 p-4 rounded-lg cursor-pointer bg-slate-100 border border-slate-300 hover:border-slate-400">
            <img className="w-[160px]" src={imgSrc}></img>
            <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.length < 4 ? resData.info.cuisines.join(',') :resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.sla.slaString}</h4>
            <p>User: {loggedInUser}</p>
        </div>
    )
}
// HOC higher order component
// RestCarPromoted  => input rescard 
// Output ==> enhaced Rescard

export const withPromotedLabel = () =>{
    return(props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard