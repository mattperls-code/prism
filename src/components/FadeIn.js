import React, { useState, useRef, useEffect, useLayoutEffect } from "react"

const FadeIn = ({ delay, children }) => {
    const [applyAnimation, setApplyAnimation] = useState(false)
    const fadeElementRef = useRef()
    const handleFadeElementEvent = () => {
        const box = fadeElementRef.current.getBoundingClientRect()

        if(box.y < 0.6 * window.innerHeight){
            setApplyAnimation(true)
        }
    }

    useLayoutEffect(handleFadeElementEvent, [])

    useEffect(() => {
        window.addEventListener("scroll", handleFadeElementEvent)
        window.addEventListener("resize", handleFadeElementEvent)

        return () => {
            window.removeEventListener("scroll", handleFadeElementEvent)
            window.removeEventListener("resize", handleFadeElementEvent)
        }
    }, [])

    const transitionDelay = typeof delay == "string" ? delay : "0s"

    return (
        <div ref={fadeElementRef} style={{ transitionDelay }} className={applyAnimation ? "fade fade-in" : "fade fade-out"}>
            {
                children
            }
        </div>
    )
}

export default FadeIn