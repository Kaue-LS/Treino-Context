import { useContext } from "react"
import {CountContext} from './App'

export default function AnotherChild(){

    const {setCount} =useContext(CountContext)

    return(
    <div>
        <button onClick={()=>{setCount({type:'INCREMENT1',payload:5})}}>Increment</button>
        <button onClick={()=>{setCount({type:'DECREMENT1',payload:3})}}>Decrement</button> 

        <button onClick={()=>{setCount({type:'INCREMENT2',payload:5})}}>Increment</button>
        <button onClick={()=>{setCount({type:'DECREMENT2',payload:3})}}>Decrement</button> 
    </div>
    )
}
