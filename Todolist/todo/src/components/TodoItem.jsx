function TodoItem({id,status,title,handleEditTodo,handleDeleteTodo}){
    const handletoggle=()=>{
      const updateTodo={
        id,
        status:!status,
        title
      }
      handleEditTodo(id,updateTodo)
    }
    const handleDelete=()=>{
      const deleteTodo={
          id:"",
          title:"",
          status:""
      }
      handleDeleteTodo(id,deleteTodo)
    }
    return(
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div>
          <h2>{title}</h2>
          </div>
          <div>
          <h5>{status?"Completed":"Not Completed"}</h5>
          </div>
          <div>
          <button onClick={handletoggle}>Toggle</button>
          <button onClick={handleDelete}>Remove</button>
          </div>
        </div>
    )
}
export default TodoItem