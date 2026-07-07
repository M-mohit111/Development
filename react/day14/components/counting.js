import { useDispatch, useSelector } from "react-redux"
import {increase,decrease,reset} from "./slice1";
export default function Counting(){

    const count = useSelector((state)=>state.slicer1.count);
    const dispatch = useDispatch();
    
    return(
        <>
            <h1> counter is {count} </h1>
            <button onClick={()=>dispatch(increase())}> increase </button>
            <button onClick={()=>dispatch(decrease())}> decrease </button>
            <button onClick={()=>dispatch(reset())}> reset </button>
        </>
    )
}