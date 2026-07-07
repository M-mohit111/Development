import React,{useState,useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";
function Password(){
    const[Password,setpassword]=useState("password");
    const[length,setlength]=useState(10);
    const[numberchange , setnumber]=useState(false);
    const[charchange,setchar]=useState(false);

    const generatepassword = useCallback(()=>{
        let str = "dsflsnflskdnfekfjsdknfslnlADKJSDNSKDNFEN";
        if(numberchange){
            str+="0123456789"
        }
        if(charchange){
            str+="!@#$%^&*()_+-={}[]|\:,./<>?`~";
        }
        let pass = "";
        for(let i = 1;i<length;i++){
            let charIndex = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIndex);
        }
        setpassword(pass);
    },[length,numberchange,charchange])
    useEffect(()=>{
        generatepassword();
    },[length,numberchange,charchange]);
    return(
        <>  
            <div>
                <h1>{Password}</h1>
                <div>
                    <input type="range" min={5} max={10} value={length} onChange={(e)=>setlength(e.target.value)}></input>
                    <label>Length is: {length}</label>
                    <input type="checkbox" defaultChecked={numberchange} onChange={()=>setnumber(!numberchange)}></input>
                    <label>number</label>
                    <input type="checkbox"defaultChecked={charchange} onChange={()=>setchar(!charchange)}></input>
                    <label>Character</label>
                </div>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Password/>);