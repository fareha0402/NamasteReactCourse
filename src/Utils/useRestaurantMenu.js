import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetdata
  useEffect(() => {
    fetchResInfo();
  }, []);
  const fetchResInfo = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;


///SO this custom hook is used for fetch data logic and SRP is implememnted 
//Displaying data is different 
//Abstracted the fetching data logic 