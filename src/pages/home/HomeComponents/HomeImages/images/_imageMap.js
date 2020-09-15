import React from 'react'
import homeImageData from './_homeImageData'

function imageMap(
    styleAll, 
    styleImg, 
    styleDescription, 
    classDescription = 'text-center', 
    classImage,
){
    const imageMaped = homeImageData.map(data => { 
        return (
            <div 
                key={data.id}
                style={styleAll}
            >   
                <div className={'overflow-hidden border'}>
                    <img className={classImage} src={data.url} alt={data.url} style={styleImg} />
                </div>
                <p className={classDescription}  style={styleDescription}>{data.description}</p>
            </div>
        )
    })
    return {imageMaped}
}

export default imageMap