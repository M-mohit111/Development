import React,{useState} from "react";
import Decrement from "./decrement";
export default function Increament({counts,setcounts}){
    return(
        <>
            <div>
                <button onClick={()=>setcounts(counts+1)}>increase</button>
            </div>
        </>
    )
}