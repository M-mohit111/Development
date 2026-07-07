import { useParams } from "react-router"
import { useEffect, useState } from "react";
export default function Github(){
    const {name} = useParams();
    const [profile,setprofile] = useState(null);
    async function fectchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setprofile(data);
    }
    useEffect(()=>{
        fectchuser();
    },[])
    return(
        <>
        <h1>my github profile is</h1>
        <div>
            <img src={profile?.avatar_url}></img>
            <h2>{profile?.login}</h2>
        </div>
        </>
    )
}