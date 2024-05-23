import { CDN_URL } from "../utils/constants";
// higher order components
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, costForTwo, avgRating} = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="res-logo" 
                alt="img not found" 
                src={CDN_URL+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }

}
export default RestaurantCard;