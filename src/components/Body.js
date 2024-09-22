import RestaurantCard from "./RestaurantCard"
import restaurantsList from '../Utils/restaurants.json';
import { useState } from "react";
const Body = () => {
    //Local Stateful variable,Superpowerful Variable
    const [listofRestaurants,setListofRestaurants] = useState(restaurantsList)
    
    // let listofRestaurants = restaurantsList // Normal JS variable

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants.filter(res => res.info.avgRating > 4.5)
                    setListofRestaurants(filteredList)
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-Container">
               { listofRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
        
    )
    
}
export default Body