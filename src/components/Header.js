import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import {UserContext} from '../utils/Store'
import { useContext } from "react";
const Header = ()=>{
   const data=useContext(UserContext);
    const[login,setLogin]=useState("Login")
    const onlineStatus=useOnlineStatus()
    return(
       <div className="bg-red-200 md:bg-orange-200 flex justify-between">
         <div className="logo hidden md:block m-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&usqp=CAU" alt="logo" className="rounded-lg  md:w-[100px]"/>
         </div>
         <div className="">
            <ul className="list flex justify-evenly m-5 p-4">
                <li className="p-3 font-serif">OnlineStatus:{onlineStatus?"✅":"🔴"}</li>
                <li className="p-3 font-serif"><Link to="/" className="link">Home</Link></li>
                <li className="p-3 font-serif"><Link to="/about" className="link">AboutUS</Link> </li>
                <li className="p-3 font-serif"><Link to="/contact" className="link">ContactUS</Link></li>
                <li className="p-3 font-serif"><Link>🛒</Link></li>
                <li className="p-3 font-serif">{data.name}</li>
                <button onClick={()=>{login==="Login"?setLogin("Logout"):setLogin("Login")}} className="font-bold border-2 p-2 rounded-md ml-5">{login}</button>
            </ul>
         </div>
        
       </div> 
    )
}
export default Header