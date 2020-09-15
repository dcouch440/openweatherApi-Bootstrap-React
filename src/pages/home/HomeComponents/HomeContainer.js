import React from 'react'
import Carousel from './HomeImages/Carousel'
import useWindowSize from '../../../globalHooks/useWindowSize'

function HomeContainer() {
    const SPEED_OF_CAROUSEL = 10000
    const {screenIsXS, screenIsSmall, screenIsMedium, screenIsLarge} = useWindowSize()  

    const containerSmall = {
        display: screenIsXS || screenIsSmall ? null : 'none',
        marginTop: '20px',
        width: '10px',
    }
    const containerMedium = {
        display: screenIsMedium ? null : 'none'
    }

    const containerLarge = {
        display: screenIsLarge ? null : 'none'
    }
    const image = {
        height: '500px',
        width: '100%',
        margineTop: '30px',
        objectFit: 'cover',
        boxShadow: '300px 1px 4px black, 1px 1px 3px #FFFFFF80, -2px -2px 10px #84848440',
        filter: 'grayscale(10%)'
    }
    const description = {
        backgroundColor: '#4b5d6720',
        boxShadow: '1px 1px 4px black, 0px 0px 1px white',
        fontFamily: 'monospace',
        
    }

    

    const displayWithSize = () => (
        <div className='container-fluid'>
            <div className='row'>
                <Carousel 
                    speed={SPEED_OF_CAROUSEL} 
                    length={1}
                    styleAll= {containerSmall}
                    styleImg={image}
                    styleDescription={description}
                    className='pt-1 col-12' 
                    classDescription='mt-2 pt-1 text-center'
                    classImage='float'
                />
                <Carousel 
                    speed={SPEED_OF_CAROUSEL} 
                    length={2}
                    styleAll={containerMedium}
                    styleImg={image}
                    styleDescription={description}
                    className='pt-1 col-6' 
                    classDescription='mt-2 pt-1 text-center'
                    classImage='float'
                />
                <Carousel 
                    speed={SPEED_OF_CAROUSEL} 
                    length={3}
                    styleAll={containerLarge}
                    styleImg={image}
                    styleDescription={description}
                    className='pt-1 col-4' 
                    classDescription='mt-2 pt-1 text-center'
                    classImage='float'
                />
            </div>
        </div>
    )
    return displayWithSize()
}

export default HomeContainer