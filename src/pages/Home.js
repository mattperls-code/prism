import React, { useEffect, useState, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import ScrollTracker from "../components/ScrollTracker"

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
                        <ScrollTracker realScrollHeight={2000} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container art-color"}>
                                    <div className={"art-header"}>Art</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${progress * -(3000 - window.innerWidth)}px)` }}>
                                        {
                                            new Array(1000).fill("art").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        )} />
                        <ScrollTracker realScrollHeight={2000} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container math-color"}>
                                    <div className={"math-header"}>Mathematics</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${(1 - progress) * -(3000 - window.innerWidth)}px)` }}>
                                        {
                                            new Array(1000).fill("math").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        )} />
                        <ScrollTracker realScrollHeight={2000} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container language-color"}>
                                    <div className={"language-header"}>Language</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${progress * -(3000 - window.innerWidth)}px)` }}>
                                        {
                                            new Array(1000).fill("language").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        )} />
                        <ScrollTracker realScrollHeight={2000} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                <div className={"sticky-header-container science-color"}>
                                    <div className={"science-header"}>Science</div>
                                </div>
                                <div className={"sticky-content-wrapper"}>
                                    <div className={"sticky-content-container"} style={{ transform: `translateX(${(1 - progress) * -(3000 - window.innerWidth)}px)` }}>
                                        {
                                            new Array(1000).fill("science").join(" ")
                                        }
                                    </div>
                                </div>
                            </div>
                        )} />
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default HomePage