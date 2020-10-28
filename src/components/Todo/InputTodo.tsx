import React, {useState} from "react"

interface Props{
    addTodo: (title:string)=>void
}

// export default class InputTodo extends Component<Props>{
//     state={
//         title:""
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <div className="input-group">
//                     <input 
//                         type="text" 
//                         name="title" 
//                         className="form-control"
//                         placeholder="Add Todo..." 
//                         value={this.state.title} 
//                         onChange={this.onChange} 
//                     />

//                     <input type="submit" className="btn btn-primary input-group-append" value="Add"/>
//                 </div>
//             </form>
//         )
//     }

//     onChange = (e:any) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//         console.log('ello')
//     }

//     handleSubmit = (e:any) => {
//         e.preventDefault()
//         this.props.addTodo(this.state.title)
//         this.setState({
//             title:""
//         })
//     }
// }

export const InputTodo = (props:Props) => {

    const [inputText, setInputText] = useState({
        title: ""
    })

    const onChange = (e:any) =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        props.addTodo(inputText.title)
        setInputText({
            title: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input 
                    type="text" 
                    name="title" 
                    className="form-control"
                    placeholder="Add Todo..." 
                    value={inputText.title} 
                    onChange={onChange} 
                />

                <input type="submit" className="btn btn-primary input-group-append" value="Add"/>
            </div>
        </form>
    )
}