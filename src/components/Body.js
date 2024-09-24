import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer"
// import restaurantsList from '../Utils/restaurants.json';
import { useEffect, useState } from "react";
const Body = () => {
    //Local Stateful variable,Superpowerful Variable
    const [listofRestaurants,setListofRestaurants] = useState([])
    
    // let listofRestaurants = restaurantsList // Normal JS variable

    useEffect(() => 
        {
            console.log('use effect called')
            fetchData()
        },[])
        console.log('body rendered')

        const fetchData = async() => {
           let data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
           const json = await data.json()
        //    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
           setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        // Conditional Rendering
        if(listofRestaurants.length === 0){
            return<ShimmerUI/>
        }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants?.filter(res => res.info.avgRating > 4.3)
                    setListofRestaurants(filteredList)
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-Container">
               { listofRestaurants?.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
        
    )
    
}
export default Body