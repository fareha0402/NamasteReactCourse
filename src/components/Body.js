import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer"
// import restaurantsList from '../Utils/restaurants.json';
import { useEffect, useState } from "react";
const Body = () => {
    //Local Stateful variable,Superpowerful Variable
    const [listofRestaurants,setListofRestaurants] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    const [searchText,setSearchText] = useState('')
    
    // let listofRestaurants = restaurantsList // Normal JS variable
    // let listofRestaurants = restaurantsList // Normal JS variable

    useEffect(() => { 
        console.log('useEffect called')
        fetchData()},
        [])
        console.log('body rendered')

        const fetchData = async() => {
           let data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
           const json = await data.json()
           setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
           setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        // ****  Conditional Rendering **
        return listofRestaurants.length === 0 ? (<ShimmerUI/>):(
            <div className="body">
    
            <div className="filter">
            <div className="search">
                <input type="text" className="search-input" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button onClick={() => {
                    debugger
                   const searchList =  listofRestaurants?.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                   setFilteredRestaurant(searchList)
                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants?.filter(res => res.info.avgRating > 4.3)
                    setListofRestaurants(filteredList)
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-Container">
               { filteredRestaurant?.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
        )
}
export default Body