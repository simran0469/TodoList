import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const initialState={
    
    todos:[],
    IsLoading:false,
    IsError:false
}
export const store=legacy_createStore(reducer,initialState)  //reducer and  initial state