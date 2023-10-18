
 let ids=0;
 function addId(){
    return ids+=1;
 }
export function addtodo(todo){
    let idn=addId()
    return {type:'add-todo',payload:{...todo,id:idn}}
}
export function edittodo(todo){
    return {type:'edit-todo',payload:todo}
}
export function deletetodo(id){
    return {type:'delete-todo',payload:id}
}