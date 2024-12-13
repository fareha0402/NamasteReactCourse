import { useEffect, useState } from "react"
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom"
import { MENU_URL } from "../Utils/constants"
const RestaurantMenuPage = () => {
    const [resInfo,setResInfo] = useState(null)
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        // console.log(json.data.cards[2].card.card.info.id)
        setResInfo(json)
    }
    if (resInfo === null) {
        return <Shimmer/>
    }
    const {name, cuisines, costForTwoMessage,id} = resInfo?.data?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card
    console.log(itemCards)
    return(        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
               {itemCards?.map(item =>  <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100}</li>)}
            </ul>
            
        </div>
    )
}
export default RestaurantMenuPage