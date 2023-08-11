import React, { useState } from 'react'
import ItemList from './ItemList';

const RestuarantCategory = ({data,showItem,setItem}) => {
    const handleClick =()=>{
        setItem()
      }
  return (
    <div>
        <div className='w-6/12 mx-auto bg-whitej-100' onClick={handleClick}>
            <div className='  flex justify-between  shadow-lg p-4 my-6 cursor-pointer'>
                <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>  

            </div>
        {showItem && <div> <ItemList items={data.itemCards}/></div>}
            
        
        </div>
       
    </div>
  )
}

export default RestuarantCategory;