import React from "react"
import ReactDOM from "react-dom/client"
import Headers from "../components/header"
import Cards from "../components/cards"
import { Provider } from "react-redux";
import storeslice from "../components/store";
function App(){
    return(
        <Provider store={storeslice}>
            <Headers></Headers>
            <Cards></Cards>
        </Provider>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)