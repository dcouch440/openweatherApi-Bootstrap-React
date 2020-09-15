import React, {useContext} from 'react'
import {Context} from '../Context'
import useTheme from '../globalHooks/useTheme'
function ThemeButton() {
    const {isDarkTheme} = useContext(Context)
    const {toggleTheme} = useTheme()
    //  reverse theme for button
    const themeButton = isDarkTheme ? 'light' : 'dark'
    //  theme button false for true
    const themeButtonCapital = themeButton.charAt(0).toUpperCase() + themeButton.slice(1)
    
    const themeButtonStyle = {
        fontFamily: "monospace",
        textShadow: '1px 1px purple',
        borderRadius: '20px',
        border: '2px groove black'
    }
    return (
        <div className='col'>
            <div className='row' style={{flexDirection: "row-reverse"}}>
                <button 
                    type="button" 
                    onClick={() => toggleTheme()} 
                    className={`btn btn-${themeButton}`}
                    style={ themeButtonStyle }
                >
                    {themeButtonCapital}
                </button>
            </div>
        </div>
    )
}

export default ThemeButton