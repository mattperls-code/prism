import React, { useEffect, useState, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const HomePage = () => {
    let [showInitialWrapper, setShowInitialWrapper] = useState(true)

    useEffect(() => {
        let mounted = true

        setTimeout(() => {
            if(mounted){
                setShowInitialWrapper(false)
            }
        }, 4400)

        return () => mounted = false
    }, [])

    let [artParallaxOffset, setArtParallaxOffset] = useState(0)
    let artParallaxRef = useRef()

    let [mathParallaxOffset, setMathParallaxOffset] = useState(0)
    let mathParallaxRef = useRef()

    let [languageParallaxOffset, setLanguageParallaxOffset] = useState(0)
    let languageParallaxRef = useRef()

    let [scienceParallaxOffset, setScienceParallaxOffset] = useState(0)
    let scienceParallaxRef = useRef()

    const handleParallaxEvent = () => {
        const artBox = artParallaxRef.current.getBoundingClientRect()
        if(artBox.y < 0){
            const progress = -artBox.y / 2000
            const scale = 3000 - window.innerWidth

            if(progress > 1){
                setArtParallaxOffset(-scale)
            } else {
                setArtParallaxOffset(-scale * progress)
            }
        } else {
            setArtParallaxOffset(0)
        }

        const mathBox = mathParallaxRef.current.getBoundingClientRect()
        if(mathBox.y < 0){
            const progress = -mathBox.y / 2000
            const scale = 3000 - window.innerWidth

            if(progress > 1){
                setMathParallaxOffset(0)
            } else {
                setMathParallaxOffset(-scale * (1 - progress))
            }
        } else {
            setMathParallaxOffset(-3000 + window.innerWidth)
        }

        //

        const languageBox = languageParallaxRef.current.getBoundingClientRect()
        if(languageBox.y < 0){
            const progress = -languageBox.y / 2000
            const scale = 3000 - window.innerWidth

            if(progress > 1){
                setLanguageParallaxOffset(-scale)
            } else {
                setLanguageParallaxOffset(-scale * progress)
            }
        } else {
            setLanguageParallaxOffset(0)
        }

        const scienceBox = scienceParallaxRef.current.getBoundingClientRect()
        if(scienceBox.y < 0){
            const progress = -scienceBox.y / 2000
            const scale = 3000 - window.innerWidth

            if(progress > 1){
                setScienceParallaxOffset(0)
            } else {
                setScienceParallaxOffset(-scale * (1 - progress))
            }
        } else {
            setScienceParallaxOffset(-3000 + window.innerWidth)
        }
    }

    useEffect(() => {
        if(!showInitialWrapper){
            addEventListener("scroll", handleParallaxEvent)
            addEventListener("resize", handleParallaxEvent)

            return () => {
                removeEventListener("scroll", handleParallaxEvent)
                removeEventListener("resize", handleParallaxEvent)
            }
        }
    }, [showInitialWrapper])

    return (
        <React.Fragment>
            {
                showInitialWrapper && (
                    <div className={"initial-fading-wrapper"}>
                        <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                            <div className={"header1"}>Prism</div>
                        </div>
                        <div className={"caption1"}>a brief overview of human culture</div>
                    </div>
                )
            }
            <section style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/abstract-colorful-painting-background-with-blank-blur-smooth-color-texture-graphic-design_120819-2086.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                    <div className={"header2"}>Prism</div>
                </div>
                <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                    <div style={{ position: "absolute", bottom: "40px", width: "100vw", textAlign: "center" }}>
                        <div className={"caption2"}>keep scrolling to learn more</div>
                        <FontAwesomeIcon className={"chevron-down-icon"} icon={faChevronDown} />
                    </div>
                </div>
            </section>
            {
                !showInitialWrapper && (
                    <React.Fragment>
                        <section ref={artParallaxRef} style={{ height: "calc(100vh + 2000px)" }}>
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container art-color"}>
                                    <div className={"art-header"}>Art</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${artParallaxOffset}px)` }}>
                                        {
                                            new Array(1000).fill("art").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section ref={mathParallaxRef} style={{ height: "calc(100vh + 2000px)" }}>
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container math-color"}>
                                    <div className={"math-header"}>Mathematics</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${mathParallaxOffset}px)` }}>
                                        {
                                            new Array(1000).fill("math").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section ref={languageParallaxRef} style={{ height: "calc(100vh + 2000px)" }}>
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container language-color"}>
                                    <div className={"language-header"}>Language</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${languageParallaxOffset}px)` }}>
                                        {
                                            new Array(1000).fill("language").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section ref={scienceParallaxRef} style={{ height: "calc(100vh + 2000px)" }}>
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container science-color"}>
                                    <div className={"science-header"}>Science</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${scienceParallaxOffset}px)` }}>
                                        {
                                            new Array(1000).fill("science").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default HomePage