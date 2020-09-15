import {useState, useEffect, useContext} from 'react'
import {Context} from '../Context'

function Api() {
    const [data, setData] = useState()
    const [temp, setTemp] = useState('')
    const [feelsLike, setFeelsLike] = useState('')
    const [tempMax, setTempMax] = useState('')
    const [tempMin, setTempMin] = useState('')
    const [description, setDescription] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windDeg, setWindDeg] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [coordLon, setCoordLon] = useState()
    const [coordLat, setCoordLat] = useState()
    const [weatherId, setWeatherId] = useState()
    const [icon, setIcon] = useState()
    const [isLoading, setIsLoading] = useState(null)
    const {inputData, setInputData, setHaveInput, haveInput} = useContext(Context)
    
    function getUrl(data) {
        const WM_API_KEY = `ca5b6d999cc6ed8b4ad7abc2b566fec1`
        const isZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/g.test(data) 
        const isCity = /[A-Z]/gi.test(data) && data !== null
        const isNull = data === null
        return (
            isZipCode ?
                `http://api.openweathermap.org/data/2.5/weather?zip=${data},us&appid=${WM_API_KEY}`
            : isCity  ?
                `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${WM_API_KEY}`
            : isNull  ?
                `http://api.openweathermap.org/data/2.5/weather?zip=97027,us&appid=${WM_API_KEY}`
            : null
        )
    }
    const url = getUrl(inputData)
    useEffect(() => {
    
        fetch(url)
        .then(res => res.json())
        .then(data => {    
            setData(data)
            
        })
        .then(() => {
            setIsLoading('done')
            console.log('cats')
        })
        .catch(res => { 
            console.log('error')
            setHaveInput(false)
            setInputData(null)
        })   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [haveInput])
    
    if(isLoading === 'done'){ 
        setIsLoading(null)
        setTemp(data.main.temp)
        setFeelsLike(data.main.feels_like)
        setTempMax(data.main.temp_max)
        setTempMin(data.main.temp_min)
        setDescription(data.weather[0].description)
        setWindSpeed(data.wind.speed)
        setWindDeg(data.wind.deg)
        setCity(data.name)
        setCountry(data.sys.country)
        setCoordLon(data.coord.lon)
        setCoordLat(data.coord.lat)
        setWeatherId(data.weather.id)
        setIcon(data.weather[0].icon) 
    }
    
    const apiArray = [
            temp,
            feelsLike,
            tempMax,
            tempMin,
            description,
            windSpeed,
            windDeg,
            city,
            country,
            coordLon,
            coordLat,
            weatherId
    ]
    const isUndefined = apiArray.some(type => typeof type === undefined)  
    
    return {
            data,
            temp,
            feelsLike,
            tempMax,
            tempMin,
            description,
            windSpeed,
            windDeg,
            city,
            country,
            coordLon,
            coordLat,
            icon,
            isUndefined,
            weatherId
    }
}

export default Api