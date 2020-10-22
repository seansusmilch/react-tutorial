import React from 'react'
import {NavLink} from './NavLink'

interface Props {
    pages: string[]
    active: string
    goTo: (page:string)=>void
}

export default function NavContainer(props:Props){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {props.pages.map(page=>(
                        <NavLink
                            page={page}
                            isActive={page === props.active}
                            goTo={props.goTo}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    )
}