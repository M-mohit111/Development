import React,{useEffect,useState}from "react"
import ReactDOM from "react-dom/client"
import Colorfull from "./componet/colorfull";
function Main(){
    const[val,setval]=useState(0);
    return(
    <>
        <div>
            <h1>count is:{val}</h1>
            <button onClick={()=>{setval(val+1)}}>
                increament
            </button>
        </div>

        <Colorfull></Colorfull>
    </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);