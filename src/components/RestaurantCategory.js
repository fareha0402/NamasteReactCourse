import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import ItemList from './ItemList'
import { useState } from 'react'
const RestaurantCategory = ({data,showList,setShowIndex}) =>{
    // const [showList, setShowHideList] = useState(false)
    return (
        <div className="w-9/12 mx-auto py-4 my-4 bg-slate-100 shadow-lg">
            <div className='flex justify-between cursor-pointer'  onClick={() => {
                // setShowHideList(!showList)
                setShowIndex()
            }}>
            <span className="mx-2 font-bold text-lg">{data.title} ({data.itemCards?.length})</span>
            <span className='mr-2'><FontAwesomeIcon icon={faAngleDown}/></span>
            </div>
            {/* Accordian body */}
               {showList && <ItemList  items={data.itemCards}/> } 
        </div>
    )
}

export default RestaurantCategory