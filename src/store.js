import {createStore} from 'redux'

const initialState={
    todos:[],
    // nextId:1
}

//  const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case 'add-todo':
//             const newtodo={id:state.nextId,title:action.payload.title}
//             return{...state,todos:[...state.todos,newtodo],nextId:state.nextId+1}
//         case 'edit-todo':
//             return{ ...state,todos:state.todos.map((todo)=>todo.id===action.payload.id?{...todo,title:action.payload.title}:todo)}
//         case 'delete-todo':
//             return{...state,todos:state.todos.filter((todo)=>todo.id!==action.payload)}
//         default:
//             return state

//     }
// }

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'add-todo':
            const newtodo={id:action.payload.id,title:action.payload.title}
            return{...state,todos:[...state.todos,newtodo]}
        case 'edit-todo':
            return{ ...state,todos:state.todos.map((todo,index)=>todo.id===action.payload.id?{...todo,title:action.payload.title}:todo)}
        case 'delete-todo':
            return{...state,todos:state.todos.filter((todo)=>todo.id!==action.payload)}
        default:
            return state

    }
}
const store=createStore(reducer);
console.log(store.getState())
export default store;