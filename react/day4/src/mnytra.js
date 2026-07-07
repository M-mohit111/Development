import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import Card from "./components/Cards"

const arr = [{cloth:"tshirt",offer:"40-80% off",prices:500},{cloth:"jeans",offer:"30-50% off",prices:800},{cloth:"jacket",offer:"10-70% off",prices:400}]
function App(){

    let [A,seta] = useState(arr);

    function sortthelist(){
        A.sort((a,b)=>a.prices-b.prices);
        seta([...A]);
    }

    return(
        <>
            <button onClick={sortthelist}>sort by prices</button>
            <div style={{display:"flex",flexWrap:"wrap",gap:"2px"}}>
                {/* <Card name="T-shirts" offer="40-80% off"/> */}
                {
                    A.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer} prices={value.prices}/>)
                }
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)