import { CDN_URL } from "../Utils/constants"
const RestaurantCard = (props) =>{
    const {resData} = props // Destructuring
    // const resItem = props.resData.info
    const imgSrc= CDN_URL + resData.info.cloudinaryImageId
    return(
        <div className="w-[300] p-4 cursor-pointer">
            <img className="w-[200]" src={imgSrc}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}
export default RestaurantCard