import { useState } from "react";
import { useDispatch } from "react-redux";
import { increase,decrease,reset,customincreaser } from "./slice1";
export default function Customcounter(){
    const [number,setnumber] = useState("");
    const dispatch = useDispatch();
    function handlevalue(){
        dispatch(customincreaser(Number(number)));
        setnumber("");
    }

    return(
        <>
            <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} ></input>
            <button onClick={handlevalue}>submit</button>
        </>
    )
}