import React,{useState,useEffect,useCallback,useMemo, useRef} from "react";
import ReactDOM from "react-dom/client";
function App(){
    const[count,setcount]=useState(0);
    const money = useRef(0);
    return(
        <>
            <div>
                <h1>counter:{count}</h1>
                <button onClick={()=>setcount(count+1)}>increase</button>
            </div>
            <div>
                <h1>money:{money.current}</h1>
                <button onClick={()=>{
                money.current = money.current+1 
                console.log(money)
                }}>increase</button>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);