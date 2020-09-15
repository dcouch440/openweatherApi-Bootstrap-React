import React, {useState, useContext} from 'react'
import {Context} from '../../../Context'
import {Link} from 'react-router-dom'
import useHover from '../../../globalHooks/useHover'
import '../Home.css'
import Clock from './Clock'

function HomeInput() {  
    const [text, setText] = useState()
    const {setInputData, setHaveInput, isDarkTheme} = useContext(Context)
    const [hoverRef, isHovered]= useHover()
   
    const color = isDarkTheme ? '#e4e3e3' : '#4b5d67'
    function handleChange(event) {
        const {value} = event.target
        setText(value) 
    }   
    function handleSubmit(event) {
        event.preventDefault()
        setInputData(text);
        setHaveInput(true);
       
    }  
    const zipCodeText = {
        fontFamily: 'monospace',
        fontSize: '20px',
        color: '#00000'
    }
    const input = {
        backgroundColor: '#f5efef',
        borderRadius: '10px',
        outline: 'none'
    }
    const submitButton = {
        padding: '6px',
        marginLeft: '10px',
        borderRadius: '20px',
        borderStyle: 'solid',
        borderColor: 'black',
        outline: 'none',
        backgroundColor: isHovered ? '#f53d4f' : '#d7ded9',
        transition: 'background-color 200ms'
    }

    return (
        <div className='container text-center' style={{padding: '20px 0 80px 0'}}>
            <h2 style={zipCodeText}>Enter An International City Or US ZipCode</h2>
            <form  onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    onChange={handleChange}
                    className='p-1'
                    style={input}
                />
                
                <button  
                    style={submitButton}
                >
                <Link ref={hoverRef}  to='/weather'style={{textDecoration: 'none', color: 'rgba(240, 255, 255, 99%)'}}>Get Weather </Link>
                </button>  
                
            </form>
            {<Clock className={'pt-1'} style={{color: color, fontSize: '25px', fontFamily: 'Orbitron, sans-serif'}}/>} 
        </div> 
    )
}

export default HomeInput