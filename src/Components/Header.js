import React from "react"
import {NavLink} from 'react-router-dom'

function Header(){ 
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/beers'>Beers</NavLink>
            <NavLink to='/addbeer'>Add Beer</NavLink>
        </nav>
        // <>
        //     <h1>FLATIRON BREWERY</h1>
        // </>
    )
}

export default Header