import React, { useState } from "react"
import './App.css'
import { TodoContainer } from "./components/TodoContainer"
import NavContainer from "./nav/NavContainer"

export default function App(){

    const pages=[
        "Home",
        "ToDo"
    ]

    const [active, setActive] = useState("Home")

    const goTo = (page:string)=>{
        console.log('goTo ', page);
        
        if(pages.includes(page))
            console.log('setting active page');
            
            setActive(page)
    }

    return(
        <div>
            <NavContainer 
                pages={pages}
                active={active}
                goTo={goTo}
            />
            {active==="ToDo" ? <TodoContainer/> : null}
            {active==="Home" ? <h1>Home</h1>:null}
        </div>
    )
}