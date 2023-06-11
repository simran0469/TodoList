import {  GET_TODO_REQUEST,GET_TODO_FAILURE,GET_TODO_SUCCESS, POST_TODO_REQUEST, POST_TODO_SUCCESS, POST_TODO_FAILURE, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS } from "./actiontype"

export const GetTodoAction=()=>{
    return({type:GET_TODO_REQUEST})
  }
  export const GetTodoSuccess=(payload)=>{
    return({type:GET_TODO_SUCCESS,payload})
  }
  export const GetTodoFailure=()=>{
    return({type:GET_TODO_FAILURE})
  }
  export const PostTodoAction=()=>{
    return({type:POST_TODO_REQUEST})
  }
  export const PostTodoSuccess=(payload)=>{
    return({type:POST_TODO_SUCCESS,payload})
  }
  export const PostTodoFailure=()=>{
    return({type:POST_TODO_FAILURE})
  }
 export const EditTodoRequest=()=>{
  return({type:EDIT_TODO_REQUEST})
 }
 export const EditTodoSuccess=(payload)=>{
  return({type:EDIT_TODO_SUCCESS,payload})
 }
 export const EditTodoFailure=()=>{
  return({type:EDIT_TODO_FAILURE})
 }
 export const DeleteTodoRequest=()=>{
  return({type:DELETE_TODO_REQUEST})
 }
 export const DeleteTodoSuccess=(payload)=>{
  return({type:DELETE_TODO_SUCCESS,payload})
 }
 export const DeleteTodoFailure=()=>{
  return({type:DeleteTodoFailure})
 }