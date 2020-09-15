import Api from '../../../../../../api/Api'
import imageData from './imageData'
function imageMap() {
    const {weatherId} = Api()
    const isUndefined = weatherId === undefined ? 1 : weatherId
    // everything besides the specific numbers chosen can be broken down within thier bracket of 2.xx ect..
    // numbers are brokeen down into a string and then converted back into a number
    // id chosen are fitting to this formula
    const weatherApiIdForImage = (id = isUndefined) => {
        const firstDigit = parseInt([...id.toString()][0])
        const uniqueId = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781, 800]
        const isUnique = uniqueId.some(arrayValue => arrayValue === id)
        if (isUnique) 
            return id
        else 
            return firstDigit
    }
    
    const returnedId = weatherApiIdForImage()
    const turnImageArrayIntoNumbers = imageData.map(x =>  x.id)
    const findIndex = turnImageArrayIntoNumbers.findIndex(x => x === returnedId)
    const foundIndex = imageData[findIndex]
    
    const displayImage = foundIndex === undefined ?  imageData[0].image : foundIndex.image 
    return {displayImage}
}

export default imageMap