import React,{useEffect,useState} from "react";

function Colorfull(){
    const[color,setcolor] = useState("black");

    document.body.style.background = color;

    // useeffect normally callback tabhi karta hai jab dependency mein change aaya ho nahi to run nahi karta

    useEffect(()=>{document.body.style.background = color;},[color]);

    return(
        <>
            <h1>Background colour change</h1>
            <div className="button">
                <button style={{backgroundColor:"red"}} onClick={()=>setcolor("red")} >red</button>
                <button style={{backgroundColor:"lightblue"}} onClick={()=>setcolor("blue")}>blue</button>
                <button style={{backgroundColor:"lightgreen"}} onClick={()=>setcolor("green")}>green</button>
                <button style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>yellow</button>
            </div>
        </>
    )
}

export default React.memo(Colorfull);