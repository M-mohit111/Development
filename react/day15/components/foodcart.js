import { useState } from "react";
import { useDispatch } from "react-redux";
import { additem,removeitem } from "./slice";

export default function Foodcart({value}){
    const [iscart,setcart] = useState(false);
    const dispatch = useDispatch();
    function handleclick(){
            if(iscart === true){
                dispatch(removeitem());
                setcart(false);
            }
            else{
                dispatch(additem());
                setcart(true);
            }
        }
    return(
        <>
            <h3>{value.food}</h3>
            <h3>{value.price}</h3>
            <button onClick={handleclick}>{iscart?"remove":"add"}</button>
        </>
    )
}