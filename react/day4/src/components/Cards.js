export default function Card(props){
    return(
        <div style={{border:"2px solid black",padding:"2px"}}>
            <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" height={"160px"} width={"150px"}/>
            <div style={{alignContent:"center",textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>shop now</h2>
                <h2>price:{props.prices}</h2>
            </div>
        </div>
    )
}

// this is also a away to export a file
// export default Card;