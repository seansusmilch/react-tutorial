import React from 'react'

interface Props{
    page:string
    isActive:boolean
    goTo:(page:string)=>void
}

export const NavLink = (props:Props)=>{
    return(
        <li
            key={props.page}
            className={props.isActive ? "nav-item active":"nav-item"}>
            <button 
                className="nav-link btn" 
                onClick={()=>props.goTo(props.page)}
                style={{ outline: 'none'}}
            >{props.page}</button>
        </li> 
    )
}