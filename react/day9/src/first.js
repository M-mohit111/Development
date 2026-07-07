import React,{useCallback,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";

function Githubprofile(){
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Githubprofile/>)