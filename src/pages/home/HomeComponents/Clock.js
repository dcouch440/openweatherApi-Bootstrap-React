import React, {useState, useEffect} from 'react'

function Clock({className, style}) {
    const [date, setDate] = useState(new Date())
    const [hours, setHours] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(date.getSeconds())
    const [ampm, setAmpm] = useState(hours >= 12 ? "P.M" : "A.M")

    const hoursFormat = (hours % 12) || 12;
    const minutesFormat = minutes < 10 ? `0${minutes}` : minutes
    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds
    const displayTIme = `${hoursFormat}:${minutesFormat}:${secondsFormat} ${ampm}`
   
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date())
            setHours(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
            setAmpm(hours >= 12 ? "P.M" : "A.M")
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])

    return (
        <p className={className} style={style}>{displayTIme}</p>
    )

}
export default Clock