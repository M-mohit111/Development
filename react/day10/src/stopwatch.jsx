import React,{useState,useRef,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";

function App(){
    const[count,setcount] = useState(0);
    const timeref = useRef(null);

    function start(){
        timeref.current = setInterval(() => {
            setcount((prevtime)=>prevtime+1);
        }, 1000);
    }
    function stop(){
        clearInterval(timeref.current);
        timeref.current = null
    }
    function reset(){
        clearInterval(timeref.current);
        stop();
        setcount(0);
    }

    return(
        <>
            <div>
                <h1>stopwatch:{count}</h1>
                <button onClick={start}>start</button>
                <br></br><br></br>
                <button onClick={stop}>stop</button>
                <br></br><br></br>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)