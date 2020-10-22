import React from "react"

interface Props{
    todo:{
        id: string,
        title: string,
        completed: boolean
    },
    handleChangeProps: (id:string)=>void
    deleteTodo: (id: string)=>void
}

const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    opacity: 1,
    textDecoration: "line-through",
}

export default function TodoItem(props:Props){
    return(
        <li className="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox"  checked={props.todo.completed} onChange={()=> props.handleChangeProps(props.todo.id)}/>
                </div>
            </div>
            <span className="input-group-text bg-transparent border-0" style={props.todo.completed ? completedStyle : {}} >{props.todo.title}</span>
            <button onClick={()=> props.deleteTodo(props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
        </li>    
    )
}