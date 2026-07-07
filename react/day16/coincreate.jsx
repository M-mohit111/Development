import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Fetchdata} from "./slice"
import CryptoCard from "./CryptoCard"
function Coincreate(){

    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=>state.slicer1);

    useEffect(()=>{
        dispatch(Fetchdata(20));
    },[dispatch])
    if(loading){
        return (<h1>data is loading</h1>)
    }
    if(error){
        return (<h1>date have error</h1>)
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                    padding: "20px",
                    background: "#0f172a",
                    minHeight: "100vh",
                }}
            >
                {data.map((coin) => (
                    <CryptoCard
                        key={coin.id}
                        coin={coin}
                    />
                ))}
            </div>
        </>
    );
}

export default Coincreate;