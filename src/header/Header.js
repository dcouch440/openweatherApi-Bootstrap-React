import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import {Context} from '../Context'
import Logo from './headIcon/Logo'

function Header() {
    //  DARK / LIGHT - Toggle
    const {theme, isDarkTheme} = useContext(Context)
    const color = isDarkTheme ? '#e4e3e3' : '#4b5d67'
    return (
        <div>
           <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`} style={{borderBottom: '1px solid black', boxShadow: '1px 1px 7px grey'}}>
                <Link className="navbar-brand" to='/home'>
                    <Logo />
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/weather'>Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/map'>Map</Link>
                        </li>
                    </ul>

                    {/* Theme Button */}
                    <ThemeButton />
                    
                </div>
            </nav>
        </div>
    )
}

export default Header 