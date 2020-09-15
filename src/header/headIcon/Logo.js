import React, {useContext} from 'react'
import {Context} from '../../Context'
import logoDark from './logoDark.png'
import logoLight from './logoLight.png'

function Logo() {
    const {theme} = useContext(Context)
    const style = {
        height: '50px',
        width: '100%'
    }

    const logo = theme === 'dark' ?
        <img src={logoDark} alt='DarkCloud' style={style}/> 
        :
        <img src={logoLight} alt='lightCloud'style={style}/>
    
    return logo
    
}
export default Logo