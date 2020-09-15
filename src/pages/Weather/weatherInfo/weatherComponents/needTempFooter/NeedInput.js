import React, {useContext} from 'react'
import {Context} from '../../../../../Context'
import Api from '../../../../../api/Api'
function NeedInput() {
    const {haveInput} = useContext(Context)
    const {isUndefined} = Api()

    const style = {
        fontSize: '20px',
        color: '#5f6a36',
        fontFamily: 'monospace',
        textShadow: '2px 1px 2px black, 5px 2px  150px black', 
    }

    return (
        !isUndefined ?
        !haveInput && 
            <div className='text-center pt-1' style={style}>
               <p>Default Location, please Enter A Valid City Or US Zipcode</p> 
            </div>
        : null
    )
}

export default NeedInput