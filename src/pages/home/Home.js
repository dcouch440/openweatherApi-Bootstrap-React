import React, {useContext} from 'react'
import {Context} from '../../Context'
import HomeInput from './HomeComponents/HomeInput'
import HomeContainer from './HomeComponents/HomeContainer'
import useWindowSize from '../../globalHooks/useWindowSize'

function Home() {
    const {isDarkTheme} = useContext(Context)
    const {largeScreen} = useWindowSize()
    //  themes //   dark/light
    const color = isDarkTheme ? '#e4e3e3' : '#4b5d67'
    const size = largeScreen ? '' : '-fluid'
    const homeStyle = {
        color: color,
        borderRadius: '5px',
    }
    return (
        <div className={`container${size} mt-1`} style={homeStyle}>
            <div className='col-12'>
                <HomeContainer />
                <HomeInput />
            </div>
        </div>
    )
}

export default Home