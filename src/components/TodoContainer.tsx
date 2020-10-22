import React from "react"
// import { v4 as uuidv4 } from "uuid"
import TodoList from "./TodoList"
import Header from "./Header"
import {InputTodo} from "./InputTodo"
import axios from "axios"

interface Todo {
  userId: number,
  id: string,
  title: string,
  completed: boolean
}

export default class TodoContainer extends React.Component{

    state = {
		todos: Array<Todo>(),
		show: false
    };

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
    }

    render(){
        return (<div className="container" style={{ 
          // maxWidth: "600px"
        }}>
            <Header headerSpan={this.state.show}/>
            <InputTodo addTodo={this.addTodo} />
            <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodo={this.delTodo}/>
          </div>)
    }

    handleChange = (id:string) => {
        this.setState({
            todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
			}),
			show: !this.state.show
        });
        console.log('clicked ', id)
    }

    delTodo = (id:string) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res =>
				this.setState({
					todos: [
						...this.state.todos.filter(todo =>{
							return todo.id !== id
						})
					]
				})
			)

        // this.setState({
        //     todos: [
        //       ...this.state.todos.filter(todo => {
        //         return todo.id !== id;
        //       })
        //     ]
        //   });

        console.log('deleted ', id);
    }

    addTodo = (title:string)=>{
        axios
        	.post('https://jsonplaceholder.typicode.com/todos',{
				title: title,
				completed: false
			})
			.then(res => 
				this.setState({
					todos: [...this.state.todos, res.data]
				})
			)

        // const newTodo = {
        //     id: uuidv4(),
        //     title: title,
        //     completed: false
        // };
        // this.setState({
        //     todos: [...this.state.todos, newTodo]
        // });

        console.log('added: ', title)
    }
}