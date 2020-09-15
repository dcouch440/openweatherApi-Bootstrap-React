import React from 'react'
import Coords from './weatherComponents/coords/Coords'
import Description from './weatherComponents/description/Description'
import Temp from './weatherComponents/temp/Temp'

function InfoGrid() {
    
    return (
        <>
            <div className='col-3 p-0'>
                <Temp />
            </div>
            <div className='col-9 p-0'>
                <Description />
            </div>
            <div className='col'>
                <Coords />
            </div>
            
        </>
    )
}

export default InfoGrid