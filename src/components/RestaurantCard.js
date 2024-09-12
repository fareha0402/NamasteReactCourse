const RestaurantCard = (props) =>{
    const resItem = props.resData.info
    console.log(resItem)
    const imgSrc= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resItem.cloudinaryImageId
    return(
        <div className="resCard">
            <img className="resLogo" src={imgSrc}></img>
            <h3>{resItem.name}</h3>
            <h4>{resItem.avgRating} stars</h4>
            <h4>{resItem.areaName}</h4>
            <h4>{resItem.cuisines.join(',')}</h4>
            <h4>{resItem.sla.slaString}</h4>
        </div>
    )
}
export default RestaurantCard