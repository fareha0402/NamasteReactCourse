import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer"
import useOnlineStatus from "../Utils/useOnlineStatus";
// import restaurantsList from '../Utils/restaurants.json';
import { Link } from "react-router-dom";
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

        const onlineStatus = useOnlineStatus();
        if(onlineStatus === false){
            return(<h1>You are offline!! Please check internet connection</h1>)
        }
        // ****  Conditional Rendering **
        return listofRestaurants.length === 0 ? (<ShimmerUI/>):(
            <div className="body">
    
            <div className="flex">
            <div className="search m-4 px-4 ">
                <input type="text" className="m-4 p-x-4 border border-solid border-black" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button
                className="bg-green-200 m-4 px-4 py-1 rounded-lg"
                 onClick={() => {
                   const searchList =  listofRestaurants?.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                   setFilteredRestaurant(searchList)
                }} >Search</button>
            </div>
            <div className="flex m-4 p-4 items-center">
            <button className="px-2 py-1 bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = listofRestaurants?.filter(res => res.info.avgRating > 4.3)
                    setFilteredRestaurant(filteredList)
                }}>Top Rated restaurant</button>
            </div>
            </div>
            <div className="flex flex-wrap">
               { filteredRestaurant?.map((restaurant) => (
                 <Link key={restaurant.id} to={'/restaurants/'+ restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>   
                ))}
            </div>
        </div>
        )
}
export default Body