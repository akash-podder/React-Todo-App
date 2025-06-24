import {useEffect, useRef} from "react";

export default function useClickedOutside(passedFunction, backgroundNode){
    const domNode = useRef()

    useEffect(() => {
        const handler = (event) => {
            if(domNode.current && !domNode.current.contains(event.target)){
                passedFunction()
            }
        }

        let prevBackgroundNode;
        if(backgroundNode.current){
            backgroundNode.current.addEventListener("mousedown", handler)
            prevBackgroundNode = backgroundNode;
        }

        return () => {
            if(prevBackgroundNode && prevBackgroundNode.current){
                prevBackgroundNode.current.removeEventListener("mousedown", handler)
            }
        }
    })

    return domNode
}