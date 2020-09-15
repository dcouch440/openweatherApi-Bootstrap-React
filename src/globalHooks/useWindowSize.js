import {useState, useEffect} from 'react'

function useWindowSize(){
    const X_BREAK_SML = 501 // 500 - 991 is sml, < is XS
    const X_BREAK_MED = 991
    const X_BREAK_LRG = 1200
    const Y_BREAK_SHORT = 600

    // width measured by window width - X AXES 
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // screen specific brackets 
    // use for specific brackets only
    // will return false on leaving bracket
    const [screenIsXS, setScreenIsXS] = useState(false)
    const [screenIsSmall, setScreenIsSmall] = useState(false)
    const [screenIsMedium, setScreenIsMedium] = useState(false)
    const [screenIsLarge, setScreenIsLarge] = useState(false)
    
    // string description of height to use for className or like situations
    const [windowWidth, setWindowWidth] = useState('')
    
    // height measured by window height - Y AXES
    const [screenIsShort, setScrenIsShort] = useState(false)
    const [screenIsTall, setScreenIsTall] = useState(false)
    
    // string description of height to use for className or like situations
    const [windowHeight, setWindowHeight] = useState('')
    
    // preset conditions for teranary
    // smallScreen = small only
    // mediumScreen = small + medium
    // largeScreen = small + medium + large
    /*///----------------------------------------------------  
    |   using medium will return false if screen is large   |
    |   using small will return false if screen is medium   |
    |   use with conditions to apply classNames or css      |
    /*///----------------------------------------------------
    const [smallScreen, setSmallScreen] = useState(false)
    const [mediumScreen, setMediumScreen] = useState(false)
    const [largeScreen, setLargeScreen] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        window.addEventListener('resize', () => setHeight(window.innerHeight))
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth))
            window.removeEventListener('resize', () => setHeight(window.innerHeight))
        }
    }, [width, height])

    useEffect(() => {
        if (width <= X_BREAK_SML) {
            setScreenIsXS(true)
            setWindowWidth('xsml')
            // non strict
            setSmallScreen(true)
            setMediumScreen(true)
            setLargeScreen(false)
        }
        if (width > X_BREAK_SML && width <= X_BREAK_MED) {
            setScreenIsXS(false)
            setScreenIsSmall(true)
            setScreenIsMedium(false)
            setWindowWidth('sml')

            // non strict
            setSmallScreen(true)
            setMediumScreen(false)
            setLargeScreen(false)
        }
        if (width > X_BREAK_MED && width <= X_BREAK_LRG) {
            setScreenIsXS(false)
            setScreenIsSmall(false)
            setScreenIsMedium(true)
            setScreenIsLarge(false)
            setWindowWidth('med')

            // non strict
            setSmallScreen(true)
            setMediumScreen(true)
            setLargeScreen(false)
        }
        if (width > X_BREAK_LRG) {
            setScreenIsXS(false)
            setScreenIsSmall(false)
            setScreenIsMedium(false)
            setScreenIsLarge(true)
            setWindowWidth('lg')

            // non strict
            setSmallScreen(true)
            setMediumScreen(true)
            setLargeScreen(true)
        }
    }, [width])

    
    useEffect(() => {
        if (height < Y_BREAK_SHORT) {
            setScrenIsShort(true)
            setScreenIsTall(false)
            setWindowHeight('short')
        }
        if (height >= Y_BREAK_SHORT) {
            setScrenIsShort(false)
            setScreenIsTall(true)
            setWindowHeight('tall')
        }
    }, [height])

    return {
        width, 
        height, 
        screenIsXS,
        screenIsSmall,
        screenIsMedium,
        screenIsLarge,
        windowWidth,
        screenIsShort,
        screenIsTall,
        windowHeight,
        smallScreen,
        mediumScreen,
        largeScreen
    }
}

export default useWindowSize
