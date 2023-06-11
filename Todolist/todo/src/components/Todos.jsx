import TodoInput from "./TodoInput"
import axios from "axios"
import React from "react"
import { DeleteTodoFailure, DeleteTodoRequest, DeleteTodoSuccess, EditTodoFailure, EditTodoRequest, EditTodoSuccess, GetTodoAction, GetTodoFailure, GetTodoSuccess, PostTodoAction, PostTodoFailure, PostTodoSuccess } from "../redux/action"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import TodoItem from "./TodoItem"

const url = "https://good-rose-bass-ring.cyclic.app/todo"
function Todos() {
  const dispatch = useDispatch()
  const Todo = useSelector((store) => store.todos)
  // const Todos=useSelector((store)=>{
  //    console.log(store.todos)
  // })
  // console.log(Todo)
  const getdata = () => {
    dispatch(GetTodoAction())
    axios.get(url).then((res) => {
      dispatch(GetTodoSuccess(res.data))
      // console.log(res.data) 
    }).catch((err) => {
      dispatch(GetTodoFailure())
      console.log(err)
    })
  }
  useEffect(() => {
    getdata()
  }, [])
  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      status: false
    }
    dispatch(PostTodoAction())
    axios.post(url, newTodo).then((res) => {
      dispatch(PostTodoSuccess(res.data))
      console.log(res)
    }).catch((error) => {
      dispatch(PostTodoFailure())
      //dispatch failure
      console.log(error)
    })
  }
  const handleEditTodo=(id,updateTodo)=>{
    dispatch(EditTodoRequest())
   axios.put(`https://good-rose-bass-ring.cyclic.app/todo/${id}`,updateTodo).then((res)=>{
    dispatch(EditTodoSuccess(res.data))
    console.log(res.data)
   }).catch((error)=>{
    dispatch(EditTodoFailure())
    console.log(error)
   })
  }
  const handleDeleteTodo=(id,deleteTodo)=>{
    dispatch(DeleteTodoRequest())
    axios.delete(`https://good-rose-bass-ring.cyclic.app/todo/${id}`,deleteTodo).then((res)=>{
    dispatch(DeleteTodoSuccess(res.data))
    console.log(res.data)
   }).catch((error)=>{
    dispatch(DeleteTodoFailure())
    console.log(error)
   })
  }


  return (
    <div>
      <h1>Todos list</h1>
      <TodoInput addTodo={handleAddTodo} />
      {Todo.map((item) => (
        <TodoItem key={item.id} {...item}
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo}/>
      ))}
    </div>

  )
}
export default Todos