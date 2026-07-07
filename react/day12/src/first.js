import React from "react";
import ReactDOM from "react-dom/client"
import {BrowserRouter,Routes,Route,Link} from "react-router";
import Home from "./components/home";
import Contact from "./components/contact";
import Dash from "./components/dashboard";
import Detail from "./components/detail";
import Hi from "./components/hi";
import Zero from "./components/zero";
import Hellow from "./components/hellow";
import Github from "./components/github";
// "/" this symbo represent the topmost start like the absolute path
// if we will use this symbole in nested path then it will show error
function App(){
    return(
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">dashboard</Link>
                    <Link to="/Detail">detail</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Contact" element={<Contact></Contact>}></Route>
                    <Route path="/dashboard" element={<Dash></Dash>}></Route>
                    <Route path="/detail" element={<Detail></Detail>}>
                        <Route index element={<Zero></Zero>}></Route>
                        <Route path="Hi" element={<Hi></Hi>}></Route>
                        <Route path="Hellow" element={<Hellow></Hellow>}></Route>
                    </Route>
                    <Route path="/github/:name" element={<Github></Github>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);