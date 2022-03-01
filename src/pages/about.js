import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const About = ()=>{
    const {demoState, setDemoState} = useContext(DataContext)
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={()=>setDemoState('changed in about')}>change</button>
            <p>demoState: {demoState}</p>
        </div>
    )
}

export default About