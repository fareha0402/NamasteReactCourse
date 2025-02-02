import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { CDN_URL } from "../Utils/constants"

const ItemList = (items) => {
    const arrList = Object.values(items).flat()
    console.log(items)
    return (
        <div>
            {arrList.map((i) => (
                <div key={i?.card?.info?.id} className="p-4 my-6 border border-b-2 text-left  flex justify-between">
                   <div className="w-9/12"><span className="font-bold text-gray-700 py-2 ">{i?.card?.info?.name}</span>
                    <p className="font-medium">₹{i?.card?.info?.price/100} {i?.card?.info?.defaultPrice/100}</p>
                    <p className='text-sm text-green-800'><FontAwesomeIcon icon={faStar} />{i?.card?.info?.ratings.aggregatedRating.rating}({i?.card?.info?.ratings.aggregatedRating.ratingCountV2})</p>
                    <p className="mt-4 font-serif text-orange-950">{i?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div className="absolute">
                    <button className="bg-white w-32 text-green-700 rounded-lg py-2  shadow-lg font-bold cursor-pointer">ADD</button>
                   </div>
                   <img src={CDN_URL + i.card.info.imageId} className="w-full rounded-lg"></img>
                   </div>
                  
                    </div>
            ))
            }
        </div>
    )
}
export default ItemList