import { useState } from "react";
import Foodcart from "./foodcart";
const foodItems = [{id:1, food:"Pizza", price:299}, {id:2, food:"Burger", price:149}, {id:3, food:"Pasta", price:249}, 
    {id:4, food:"Sandwich", price:129}, 
    {id:5, food:"Biryani", price:199}, 
    {id:6, food:"Momos", price:99}, 
    {id:7, food:"French Fries", price:119}, 
    {id:8, food:"Ice Cream", price:89}, 
    {id:9, food:"Dosa", price:159}, 
    {id:10, food:"Noodles", price:179}
];

export default function Cards(){

    return(
        <div style={{display:"flex",justifyContent:"center" , flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>
                        <Foodcart value={value}></Foodcart>
                    </div>
                )
            })}
        </div>
    )
}