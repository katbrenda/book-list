import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import DataProvider, { DataContext } from "../providers/DataProvider"

const NewUser = ()=>{
    const navigate = useNavigate()
    const data = useContext(DataContext)
    let [first_name, setFirstName]= useState('')
    let [last_name, setLastName]= useState('')
    let [email, setEmail]= useState('')
    let [avatar, setAvatar]= useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newUser = {id: Math.random(), first_name, last_name, email, avatar}
        console.log(newUser)
        // have values from form, also the addUser func working what do I do
        data.addUser(newUser)
        // want to go back to users page?
        navigate('/users')
    }
    return(
        <div>
            <h1>New User </h1>
            <Link to='/users'>users page</Link>
            <form onSubmit={handleSubmit}>
                <p>First Name</p>
                <input value={first_name} onChange={(e)=>setFirstName(e.target.value)} />
                <p>Last Name</p>
                <input value={last_name} onChange={(e)=>setLastName(e.target.value)} />
                <p>email</p>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                <p>avatar</p>
                <input value={avatar} onChange={(e)=>setAvatar(e.target.value)} />
                <button>add</button>
            </form>
        </div>
    )
}
export default NewUser