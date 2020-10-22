import React from "react"

import {TodoItem} from "./TodoItem"

interface Props {
    todos: {
        id: string,
        title: string,
        completed: boolean
    }[],
    handleChangeProps: (id:string)=>void,
    deleteTodo: (id:string)=>void
}

export default function TodoList(props: Props){
    return (
        <div>
                {props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodo={props.deleteTodo}

                />
                ))}
        </div>
    )
}