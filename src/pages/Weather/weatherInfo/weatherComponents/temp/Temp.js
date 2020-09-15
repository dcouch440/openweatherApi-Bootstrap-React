import React from 'react'
import Api from '../../../../../api/Api'
import '../weather.css'
import useToggler from '../../../../../globalHooks/useToggler'
function Temp() {
    const {temp, feelsLike, tempMax, tempMin, isUndefined} = Api()
    const [tempToggle, toggler] = useToggler()
    const tempColorBool = tempToggle ? '#f54242' : '#4287f5'
    const tempSignBool = tempToggle ? '℉' : '℃'

    // no input = N/A / otherwise return formula
    const f = (x) => {
       if (isUndefined) return 'N/A' 
       else return Math.floor((( x - 273.15) * 1.8) +32)
    }
    const c = (x) => {
        if (isUndefined) return 'N/A'
        else return Math.floor(x - 273.15)
    }
    const tempDisplay = (x) => tempToggle ? f(x) : c(x)

    const tempColStyle = {
        padding: '10px 10px 0 10px',
        fontFamily: 'monospace',
        textShadow: '1px 1px black, .5px .2px grey',
        filter: 'grayscale(20%)'       
    }
    const tempButton = {
        width: '100%',
        borderRadius: '10px',
        backgroundColor: tempColorBool,   
        outline: 'none',
        fontSize: '20px',
        fontFamily: 'Dancing Script, cursive',
        fontWeight: '600',
        color: 'black',
        textShadow: '1px 1px black, .5px .2px grey',
        filter: 'grayscale(20%)',
        border: '2px groove black'
    }
    
    return (
        <div style={tempColStyle}>
            <div className='text-center temp'>
                <h3>Temp</h3>
                <p>{tempSignBool} {tempDisplay(temp)}</p>
                <br />
                <h3>Feels Like</h3>
                <p>{tempSignBool} {tempDisplay(feelsLike)}</p>
                <br />
                <h3>Max</h3>
                <p>{tempSignBool} {tempDisplay(tempMax)}</p>
                <br />
                <h3>Min</h3>
                <p>{tempSignBool} {tempDisplay(tempMin)}</p>
            </div>
            <button onClick={toggler} style={tempButton}>{tempSignBool}</button>
        </div>
    )
}

export default Temp

