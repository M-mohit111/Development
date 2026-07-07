import React, { useState } from "react";
import ReactDOM from "react-dom/client"

export default function Add({value}){
    const [count,setcount]= useState(0);
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
            <h1>{value}:{count}</h1>
            <button onClick={()=>setcount(count+1)} style={{height:"40px",justifyContent:"center",marginTop:"22px"}}>voter</button>
        </div>
        </>
    )
}