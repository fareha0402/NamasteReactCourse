import { useEffect, useState } from "react"

const useOnlineStatus =() => {
    const [onlineStatus,setOnlineStatus] = useState(true)
    // check online info
    //event listners online given by Windom object /browsers
    // useffect to check the status once

    useEffect(() =>{
        window.addEventListener('online',() =>{
            setOnlineStatus(false)
        })
    },[])

    // whether online or offline booloean values
    return onlineStatus;
}
export default useOnlineStatus