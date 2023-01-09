import React from 'react'
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    return (
        <nav >
            <ul style={{display: "flex", justifyContent: "center"}}>
                <span>
                    <Link to="/"><HomeIcon /></Link>
                </span>
            </ul>
        </nav>
    )
}

export default NavBar
