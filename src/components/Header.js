import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
        </nav>
    )
}