import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "../components/counting";
import { Provider } from "react-redux";
import storeslices from "../store";
import Customcounter from "../components/custom";
function App(){
    return(
        <Provider store={storeslices}>
            <Counting></Counting>
            <br></br>
            <Customcounter></Customcounter>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);