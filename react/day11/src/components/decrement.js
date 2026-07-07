import React,{useState} from "react";
export default function Decrement({counts,setcounts}){
    return(
        <>
            <div>
                 <button onClick={()=>setcounts(counts-1)}>decrease</button>
            </div>
        </>
    )
}