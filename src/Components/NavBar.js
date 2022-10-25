import React from "react"
import {NavLink} from 'react-router-dom'

function NavBar(){ 
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/beers'>Beers</NavLink>
            <NavLink to='/addbeer'>Add Beer</NavLink>
        </nav>
        // <>
        //     <h1>FLATIRON BREWERY</h1>
        // </>
    )
}

export default NavBar