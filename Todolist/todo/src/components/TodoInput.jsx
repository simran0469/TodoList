import { useState } from "react"

function TodoInput({addTodo}){
    const[input,setinput]=useState("")
    const handleAdd=()=>{
        addTodo(input)
        console.log(input)
        setinput("")
    }
    return(
        <div>
        <input type="text" 
        value={input}
        placeholder="Add TODO"
        onChange={(e)=>setinput(e.target.value)} />
        <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}
export default TodoInput
