import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../providers/DataProvider"
const Users = ()=>{
    // const foo = useContext(DataContext)
    const data = useContext(DataContext)
    return (
        <div>
            <h1>Users Page</h1>
            <Link to='/new_user'>create a New User</Link>
        
            <button onClick={()=>data.setDemoState('changed in USERS')}>change text</button>

            {data.users.map(u=>{
                return(
                    <div key={u.id}>
                        <h1>{u.first_name} {u.last_name} id:{u.id}</h1>
                        <button onClick={()=>{data.deleteUser(u.id)}}>delete</button>
                        <Link to={`/users/${u.id}`} state={u}>show</Link>
                    </div>    
                )
            })}
            <button onClick={data.getUsers}>getUsers</button>
            <hr />
            {JSON.stringify(data)}
            <hr />
        </div>
    )
}

export default Users