import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(MENU_URL + resid)
        const json = await data.json();
        setResInfo(json.data?.cards[0]?.card?.card?.info)
    };
    return resInfo;
}
export default useRestaurantMenu;