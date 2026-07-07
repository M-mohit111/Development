import React,{useState,useEffect,useCallback,useMemo} from "react";
import ReactDOM from "react-dom/client";
function fibbonncci(n){
        if(n<=1){
            return n;
        }
        return fibbonncci(n-1)+fibbonncci(n-2);
    }
function App(){
    const[count,setcount]=useState(0);
    const[number,setnumber]=useState("");
    
    const result = useMemo(()=>fibbonncci(number),[number]);
    return(
        <>
            <div>
                <h1>counter:{count}</h1>
                <button onClick={()=>setcount(count+1)}>increase</button>
                <button onClick={()=>setcount(count-1)}>decrease</button>
            </div>
            <div>
                <h1>fibbonncci number:{result}</h1>
                <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);