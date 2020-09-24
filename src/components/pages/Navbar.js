import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link className="navbar-logo" to='/'>
                        <FaLaptopCode/>
                        Robert
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar