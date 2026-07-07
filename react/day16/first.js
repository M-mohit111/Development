import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import Coincreate from "./coincreate";
function App(){
    return (
    <Provider store={store}>
        <Coincreate/>
    </Provider>
    )
    // this is basis method which we use normally to avoid this inconvience and using this again
    // and again in every file we use createasynthunk

    // const dispatch = useDispatch();
    
    // useEffect (async()=>{
    //     dispatch(loadingdata(true));
    //     try{
    //     const reponse =  fetch("github user profile");
    //     const data = (await reponse).json();
    //     dispatch(userdata(data));
    // }
    //     catch(error){
    //     dispatch(erroroccure);
    // }
    // })
    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);