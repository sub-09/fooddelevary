import react from "react";
import  "./ExploreMenu.css"
import { menu_list } from "../../assets/assets";

import React from 'react'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
        <h1>Explore Our Menu !</h1>
        <p className="exploreMenuText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum itaque in hic culpa, corrupti eius quo perspiciatis error optio.</p>
        <div className="exploreMenuList">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?All:item.menu_name)} key={index} className="exploreMenuListItem">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}

        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu