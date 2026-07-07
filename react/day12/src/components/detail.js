import {Outlet,Link} from "react-router"
export default function Detail(){
    return(
        <>
            <nav>
                <Link to="/Detail">Detail</Link>
                <Link to="Hellow">Hellow</Link>
                <Link to="Hi">Hi</Link>
            </nav>
            <h1>you are on detail page</h1>
            <Outlet></Outlet>
        </>
    )
}