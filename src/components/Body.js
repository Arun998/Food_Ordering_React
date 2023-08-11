import RestuarantCards from "./RestuarantCards";
import ShimmerUi from "./ShimmerUi";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestuarantCards";
const Body = ()=>{
    const[res,setRes]=useState([])
    const[inpt,setInput]=useState("")
    const[filterRes,setFilterRes]=useState([])
    const onlineStatus=useOnlineStatus()
    const RestuarantCardsPromoted=withPromotedLabel(RestuarantCards) //highorder component
    
    useEffect(()=>{
        api()
    },[])
    const api = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const items= await data.json();
        setRes(items.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRes(items.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // console.log(filterRes);
    
    if(onlineStatus===false){
        return <h1>You are in offline!!</h1>
    }

    if(res.length===0){
        return <ShimmerUi/>
    }
    
    return (
        
        <div>
            <div className="body-container flex justify-around m-3 flex-wrap">
                <div className="search border-solid ml-4">
                    <input className="filter-inpt mt-2 bg-green-200 rounded-md p-1 border-2 border-slate-300" type="text" value={inpt} onChange={(e)=>{setInput(e.target.value)}}/>
                    <button className="filter-search  bg-orange-200 rounded-md px-1 ml-2" onClick={()=>{
                        const filteredCard=res.filter((card)=>(card.info.name.toLowerCase().includes(inpt.toLowerCase())))
                        setFilterRes(filteredCard)
                    }}>search</button>
                </div>
                <div className="filter-btn">
                    <button className="card-filter bg-yellow-200 border-gray-300 rounded-md border-2 px-2 m-2" onClick={()=>{
                        const list=res.filter((card)=>card.info.avgRating>4
                        );
                        setFilterRes(list)
                    }}>Top Rated Restuarants</button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap justify-center">

                { filterRes.map((restuarant)=>(
                    <Link to={"/restaurants/"+restuarant.info.id}  key={restuarant.info.id}>
                        <RestuarantCards resData={restuarant}/>
                        </Link> 
                ))}
               
            </div>
            
        </div>
    )
}
export default Body;