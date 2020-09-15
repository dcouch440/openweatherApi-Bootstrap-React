import React from 'react'
import InfoGrid from './weatherInfo/InfoGrid'
import NeedInput from './weatherInfo/weatherComponents/needTempFooter/NeedInput'
function Weather() {

    return (
        <div className='container mt-5'>
            <div className='row'>
                <InfoGrid />
            </div>             
            <NeedInput />
        </div>   
    )
}

export default Weather