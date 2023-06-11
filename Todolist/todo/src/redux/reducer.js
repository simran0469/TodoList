
import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, EDIT_TODO_FAILURE, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS} from "./actiontype"

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case GET_TODO_REQUEST:
            return {
                ...state, Isloading: true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state, Isloading: false, todos: [...payload]
            }
        case GET_TODO_FAILURE:
            return {
                ...state, Isloading: false, IsError: true
            }
        case POST_TODO_REQUEST:
            return {
                ...state, Isloading: true
            }
        case POST_TODO_SUCCESS:
            return {
                ...state, Isloading: false, IsError: false, todos: [...state.todos, payload]
            }
        case POST_TODO_FAILURE:
            return {
                ...state, Isloading: false, IsError: true
            }
        case EDIT_TODO_REQUEST:
            return {
                ...state, Isloading: true
            }
        case EDIT_TODO_SUCCESS:
            return {
                ...state, Isloading: false, IsError: false, todos: [payload]
            }
        case EDIT_TODO_FAILURE:
            return {
                ...state, IsError: true
            }
            case DELETE_TODO_REQUEST:
                return{
                    ...state,Isloading:true
                }
                case DELETE_TODO_SUCCESS:
                    return{
                        ...state,Isloading:false,todos:[payload]
                    }
                    case DELETE_TODO_FAILURE:
                        return{
                            ...state,IsError:true
                        }
        default:
            return state
    }
}