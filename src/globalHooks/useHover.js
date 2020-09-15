import {useEffect , useRef, useState} from 'react'

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);
    const runIf = ref.current;

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            }
        }
    }, [runIf])

    return  [ref, isHovered] 
}
