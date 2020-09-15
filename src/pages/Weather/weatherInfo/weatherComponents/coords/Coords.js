import React from 'react'
import Api from '../../../../../api/Api'
import './coords.css'

function Coords() {
    const { city, country, coordLon, coordLat, isUndefined } = Api()
    
    const haveOutput = isUndefined ?
        'Encountered an error connecting to the server'
    :   `${city}, ${country} lon: ${coordLon} lat: ${coordLat}`
    
    return (
        <div>
            <div className='row shadow mt-3 coords-plate'>
                <p>{haveOutput}</p>
            </div>
        </div>
    )
}


export default Coords