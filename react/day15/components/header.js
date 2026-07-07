import { useSelector } from "react-redux"
export default function Headers(){

    const count = useSelector((state)=>state.slice.count);

    return(
            <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
                <h1>Swiggy</h1>
                <br></br>
                <h1>Cart : ({count})</h1>
            </div>
    )
}