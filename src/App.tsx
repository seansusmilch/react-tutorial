import React, { useState } from "react"
import './App.css'
import { TodoContainer } from "./components/Todo/TodoContainer"
// import NavContainer from "./nav/NavContainer"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Navigation } from "./components/Navigation"
import { Error } from './components/Error'

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
            <BrowserRouter>
            <div>
                <Navigation />
                <div className="container">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/todo" component={TodoContainer}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </div> 
        </BrowserRouter>

            {/* <NavContainer 
                pages={pages}
                active={active}
                goTo={goTo}
            />
            {active==="ToDo" ? <TodoContainer/> : null}
            {active==="Home" ? <h1>Home</h1>:null} */}
        </div>
    )
}