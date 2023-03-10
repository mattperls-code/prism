import React, { useEffect, useLayoutEffect, useState, useRef } from "react"

const ScrollTracker = ({ realScrollHeight, TrackingComponent }) => {
    const [progress, setProgress] = useState(0)
    const ref = useRef()

    const scrollHandler = () => {
        const box = ref.current.getBoundingClientRect()

        if(box.y < 0){
            if(-box.y / realScrollHeight > 1){
                setProgress(1)
            } else {
                setProgress(-box.y / realScrollHeight)
            }
        } else {
            setProgress(0)
        }
    }

    useEffect(() => {
        addEventListener("scroll", scrollHandler)
        addEventListener("resize", scrollHandler)

        return () => {
            removeEventListener("scroll", scrollHandler)
            removeEventListener("resize", scrollHandler)
        }
    }, [])

    useLayoutEffect(scrollHandler, [])

    return (
        <section ref={ref} style={{ height: `calc(100vh + ${realScrollHeight}px)` }}>
            <TrackingComponent progress={progress} />
        </section>
    )
}

export default ScrollTracker