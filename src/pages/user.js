import { useParams, useLocation } from "react-router-dom"
import NewUser from "./newuser"

const User = ()=>{
    let params = useParams()
    let location = useLocation()
    return (
        <div>
            <h1>User Page</h1>
            <p>{JSON.stringify(params)}</p>
            <p>{JSON.stringify(location)}</p>
            <h1>User:</h1>
            <p>{JSON.stringify(location.state)}</p>
            <h1>User ID:</h1>
            <p>{params.id}</p>
            <p>UPDATE NOT NEW</p>
            <NewUser />
        </div>
    )
}

export default User