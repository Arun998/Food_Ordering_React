import { useState,useEffect } from 'react';
import { RES_API,END_PARTAPI } from '../utils/restuarantApi';
const useRestuarantMenu =(resId)=>{
    const [menuList,setMenuList]  =useState([]);
    useEffect(()=>{
        menuapi()
    },[])

    const menuapi = async () => {
        try {
          const data = await fetch(RES_API+resId+END_PARTAPI);
          const json = await data.json();
          setMenuList(json.data);
        } catch (error) {
          console.error("Error fetching menu data:", error);
        }
      };
    return menuList;
}

export default useRestuarantMenu;