import React, {useState, useEffect} from 'react'
/**
 * 
 * @param {}  
 */
function useCounter(prop) {
    const [count, setCount] = useState(0)
    
    
    useEffect(() => {
        setTimeout(() => {
            setCount(x => x + 1)
        }, 1000)

    }, [count])
    return [count, setCount]
}
export default useCounter