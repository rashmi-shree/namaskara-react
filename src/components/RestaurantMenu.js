import {useEffect, useState} from "react";
import { CDN_URL, MENU_URL } from "../utils/constants";
import {useParams} from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const {resid} = useParams();
    const resInfo = useRestaurantMenu(resid);
    console.log("RS:- ", resInfo);
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="res-logo" 
                alt="img not found" 
                src={
                    CDN_URL+ 
                    resInfo?.cloudinaryImageId} />
            <h3>{resInfo?.name}</h3>
            <h4>{resInfo?.avgRating}</h4>
            <h4>{resInfo?.costForTwoMessage}</h4>
            <h4>food available:-</h4>
            <ul>
                {
                    resInfo?.cuisines.map((data)=>
                    (<li key={data}>{data}</li>))
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;