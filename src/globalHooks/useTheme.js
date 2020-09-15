import {useContext, useEffect} from 'react'
import {Context} from '../Context'

function useTheme() {
    const {theme, toggleTheme} = useContext(Context)
    
    // BODY THEME CHANGE // CSS IN index.css
    useEffect(() => {
        if(theme === 'dark'){
            document.body.classList.add('dark-theme')
            document.body.classList.remove('light-theme')
        } else if (theme === 'light') {
            document.body.classList.add('light-theme')
            document.body.classList.remove('dark-theme')
        }
    }, [theme]) 

    return {toggleTheme}

}
export default useTheme