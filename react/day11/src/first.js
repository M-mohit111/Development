import React, { useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Increament from "./components/increament";
import Decrement from "./components/decrement";
import globalcontent from "./global";

function App(){
    const[count,setcount]=useState(0);
    const data = useContext(globalcontent);
    return(
        <>
            <div>
                <globalcontent.Provider value={{count,setcount}}>
                <h1>counter:{count}</h1>
                <Increament counts={count} setcounts={setcount}/>
                <Decrement counts={count} setcounts={setcount}/>
                </globalcontent.Provider>
                <h2>i my name is {data}</h2>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);