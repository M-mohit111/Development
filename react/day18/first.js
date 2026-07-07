import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./add";
function App(){
    const [language,setlanguage] = useState(["ts","js","java"]);
    const [i,set] = useState(0);
    const newlanguage = ["cpp","html","react"];
    function handleclick(){

        if(newlanguage.length>0){
            setlanguage([newlanguage[i],...language]);
            set(i+1);
        }        
    }
    return(
        <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
            {
                language.map((value,id)=>{
                    return <Add key={value} value={value}></Add>
                })
            }
            <button onClick={handleclick}>add language</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)