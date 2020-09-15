import React, {useState, useEffect} from 'react'
import imageMap from './images/_imageMap'
import './homeImage.css'

function Carousel({className, length, speed, oneIndex, styleAll, styleImg, styleDescription}) {
    const {imageMaped} = imageMap(styleAll, styleImg, styleDescription)
    const [currentIndex, setcurrentIndex] = useState(0)
    const imageArrayLength = imageMaped.length - 1

    const isWithinRange = ()  => {       
        if (length === 1 || oneIndex) {
            if (currentIndex > imageArrayLength - length) 
                setcurrentIndex(0)
            else 
                setcurrentIndex(prevState => prevState + 1)
        }   
        else {
            if (currentIndex > imageArrayLength - length)    
                setcurrentIndex(0) 
            else 
                if (currentIndex > imageArrayLength - length - length * length) 
                    setcurrentIndex(prevState => prevState + Math.floor(1 % length))
                else 
                    setcurrentIndex(prevState => prevState  + length)  
        }
    }

    const addClassToMap = (originalArray = imageMaped) =>  {

        const slicedArray = originalArray.slice(currentIndex, currentIndex + length)
        
        return slicedArray.map(
            (object) => {
                return (
                    {
                    ...object,
                        props: {
                            ...object.props,
                            className: `${object.props.className} ${className}`
                        }
                    }
                ) 
            }
        )
    }

    useEffect(() => { 
        setTimeout(() =>{
            isWithinRange()    
        }, speed) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])

    return (
        <>     
            {addClassToMap()}
        </>
    )
}

export default Carousel