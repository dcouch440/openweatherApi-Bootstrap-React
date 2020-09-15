import React, {useState} from "react"

const Context = React.createContext()


function ContextProvider(props) {
    const [theme, setTheme] = useState("light")
    const [inputData, setInputData] = useState(null)
    const [haveInput, setHaveInput] = useState(false)

    const isDarkTheme = theme === 'dark' ? true : false
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }   
    
    return (
        <Context.Provider value={{theme, 
            toggleTheme,
            inputData,
            setInputData,
            haveInput,
            setHaveInput,
            isDarkTheme,  
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
