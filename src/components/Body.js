import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import reslist from "../utils/mockdata/reslist";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantlist, setRestaurantList] = useState([]);
    const [filterdRestaurants,setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json.data);
        setRestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(onlineStatus === false){
        return <h1>Looks like you are offline. 😞</h1>
    }
    //conditional rendering
    // if(restaurantlist.length === 0){
    //     return <Shimmer />
    // }
    return restaurantlist?.length ===0 ? (
        <Shimmer />
    ) : 
    (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                    />
                    <button 
                        className="search-btn"
                        onClick={()=>{
                            let filterRestaurants= restaurantlist.filter((rest)=> rest?.info?.name.toLowerCase().
                            includes(searchText.toLowerCase()));
                            setFilterdRestaurants(filterRestaurants);
                        }}
                    >search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        const filteredList = restaurantlist.filter((res)=> res?.info?.avgRating > 4.5);
                        setFilterdRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* not using keys not acceptable << index as key <<<<< unique id(best practice) */}
                {
                    filterdRestaurants.map((data)=>(
                        <Link 
                            key={data?.info?.id}
                            to={"/restaurantmenu/" + data?.info?.id} >
                                {
                                    data?.info?.promoted ?
                                        <RestaurantCardPromoted
                                            resData={data}
                                        />
                                    :
                                    (
                                        <RestaurantCard 
                                            resData={data} />
                                    )
                                }
                                
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;