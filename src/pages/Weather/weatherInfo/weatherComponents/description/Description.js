import React from 'react'
import Api from '../../../../../api/Api'
import imageMap from './DescriptionImages/ImageMap'

function Description() {
    const {description, windSpeed, isUndefined, icon} = Api()
    const {displayImage} = imageMap()
    
    const textForOverlay = !isUndefined &&
        `${description.toUpperCase()}, ${windSpeed} Mph Winds`
    
    const backgroundImage = {
        backgroundImage: `url(${displayImage})`,
        backgroundColor: '#99996680',
        backgroundSize: 'cover',
        objectFit: 'cover',
        height: '100%',
        filter: 'grayscale(5%)',
        boxShadow: '1px 1px 5px black'  
    }
    const descriptionPlacment = {
        position: 'absolute',
        bottom: '10px',
        paddingLeft: '10px',
    }
    const descriptionText = {
        fontSize: '30px',
        color: '#df7a36',
        fontFamily: 'monospace',
        textShadow: '2px 2px black, 2px 2px white', 
    }
    const iconStyle = {
        height: '60px',
        width: '60px',
    }
    const img = `http://openweathermap.org/img/wn/${icon}@2x.png`
    
    return (
        <>
        <div className='mr-2' style={backgroundImage}>
    
            <div className='' style={descriptionPlacment}>
                <p style={descriptionText}>{textForOverlay}<img src={img} style={iconStyle} alt=''/></p>
            </div>
        </div>
        </>
    )
}

export default Description