import RestaurantCard from "./RestaurantCard"
import restaurantsList from '../Utils/restaurants.json';
const Body = () => {
    const list = restaurantsList
        console.log(list)
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-Container">
               { list.map((restaurant) => (
                    <RestaurantCard resData={restaurant}/>
                ))}
            </div>
        </div>
        
    )
    
}
export default Body