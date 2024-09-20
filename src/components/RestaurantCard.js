const RestaurantCard = (props) =>{
    const {resData} = props // Destructuring
    // const resItem = props.resData.info
    console.log(resData.info)
    const imgSrc= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
    return(
        <div className="resCard">
            <img className="resLogo" src={imgSrc}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}
export default RestaurantCard