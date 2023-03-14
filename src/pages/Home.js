import React, { useEffect, useState, forwardRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import FadeIn from "../components/FadeIn"
import MouseTracker from "../components/MouseTracker"
import ScrollTracker from "../components/ScrollTracker"

// https://www.math.stonybrook.edu/~moira/courses/mat336-sp2021/examples/Paper2.pdf

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
                    <div className={"initial-fading-wrapper title-page-wrapper"}>
                        <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                            <header className={"header-font large-text"}>Prism</header>
                        </div>
                        <div className={"caption content-font small-text"} style={{ animation: "none", textAlign: "center" }}> - renaissance art and math - </div>
                    </div>
                )
            }
            <MouseTracker TrackingComponent={forwardRef(({ position }, ref) => {
                return (
                    <section ref={ref} className={"rainbow-background title-page-wrapper"}>
                        <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                            <header className={"header-font large-text"}>Prism</header>
                        </div>
                        <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                            <div style={{ position: "absolute", bottom: "40px", width: "100vw", textAlign: "center" }}>
                                <div className={"animated-caption content-font small-text"}>keep scrolling to learn more</div>
                                <FontAwesomeIcon className={"down-icon"} icon={faChevronDown} />
                            </div>
                        </div>
                        {
                            !showInitialWrapper && position != null && (
                                <div className={"underlay"}>
                                    <div style={{ width: "100vw", height: "100vh", clipPath: `circle(40px at ${position.x}px ${position.y}px)` }}>
                                        <div className={"initial-fading-wrapper title-page-wrapper"} style={{ animation: "none", backgroundColor: "rgba(240, 240, 240, 0.4)" }}>
                                            <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
                                                <header className={"header-font large-text"}>Prism</header>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                )
            })} />
            {
                !showInitialWrapper && (
                    <React.Fragment>
                        <section style={{ height: "unset" }}>
                            <FadeIn>
                                <header className={"header-font medium-text"} style={{ margin: "40px 0" }}>What is Prism?</header>
                            </FadeIn>
                            <FadeIn>
                                <div className={"homepage-outline-wrapper"}>
                                    <div className={"homepage-outline-container"}>
                                        <div className={"content-font small-text"}>
                                            The Renaissance is one of the most vibrant periods of human culture. It was filled with creative and intellectual breakthroughs that shaped the modern world today.
                                            <br />
                                            <br />
                                            The aim of Prism is to explore and appreciate the beautiful intersection of art and math during this timeperiod.
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </section>
                        <ScrollTracker realScrollHeight={600} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                {
                                    progress == 0 ? (
                                        <div className={"rainbow-container"}>
                                            <FadeIn>
                                                <div className={"header-font large-text"}>Artistry</div>
                                            </FadeIn>
                                        </div>
                                    ) : (
                                        <React.Fragment>
                                            <div className={"images-container"} style={{ transform: `translateX(calc(${-1 + progress} * (100% - 100vw)))` }}>
                                                <img src={"https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1NDE3NDYyMTc3NTM5MDk1/renaissance-art-gettyimages-550119221.jpg"} />
                                                <img src={"https://cdn.britannica.com/41/3341-050-825E2B57/The-Creation-of-Adam-ceiling-fresco-Sistine.jpg"} />
                                                <img src={"https://www.thoughtco.com/thmb/CWbNhXAvv6eqiWqQVWhWlAlm74A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-god-and-adam-s-hands-157844809-58ab54a23df78c345b08689c-5c531771c9e77c00014b025e.jpg"} />
                                                <img src={"https://cdn.thecollector.com/wp-content/uploads/2020/10/michelangelos-sculpture-pieta-visionary-art-e1603458695952.jpg?width=1400&quality=55"} />
                                                <img src={"https://cdn.shopify.com/s/files/1/1414/2472/files/1-_604px-Mona_Lisa__by_Leonardo_da_Vinci__from_C2RMF_retouched.jpg?v=1558424691"} />
                                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/El_nacimiento_de_Venus%2C_por_Sandro_Botticelli.jpg/440px-El_nacimiento_de_Venus%2C_por_Sandro_Botticelli.jpg"} />
                                                <img src={"https://cdn.thinglink.me/api/image/583621949083615234/640/10/scaletowidth?e="} />
                                                <img src={"https://www.discoverwalks.com/blog/wp-content/uploads/2022/08/paolo_veronese_008-1.jpg"} />
                                                <img src={"https://artincontext.org/wp-content/uploads/2021/08/Famous-Renaissance-Paintings-848x530.jpg"} />
                                                <img src={"https://images.unsplash.com/photo-1599894019794-50339c9ad89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVuYWlzc2FuY2UlMjBwYWludGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"} />
                                            </div>
                                            <div className={"text-container"} style={{ transform: `translateY(calc(${-progress} * (100% - 100vh)))` }}>
                                                {
                                                    (() => {
                                                        const elems = []

                                                        for(let i = 0;i<210;i++){
                                                            elems.push(
                                                                <div key={i} className={"header-font"}>Artistry</div>
                                                            )
                                                        }

                                                        return elems
                                                    })()
                                                }
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        )} />
                        <ScrollTracker realScrollHeight={600} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                {
                                    progress == 0 ? (
                                        <div className={"rainbow-container"}>
                                            <FadeIn>
                                                <div className={"header-font large-text"}>Mathematics</div>
                                            </FadeIn>
                                        </div>
                                    ) : (
                                        <React.Fragment>
                                            <div className={"images-container"} style={{ transform: `translateX(calc(${-1 + progress} * (100% - 100vw)))` }}>
                                                <img src={"https://thatsmaths.files.wordpress.com/2017/01/davinci-dodecahedron.jpg?w=584"} />
                                                <img src={"https://www.howitworksdaily.com/wp-content/uploads/2020/01/collage-2231082_1920-1024x859.jpg"} />
                                                <img src={"https://www.cnet.com/a/img/resize/c8073187e61392992bd986e0f7b538371413cd29/hub/2011/12/12/3cdbdc9c-f0f0-11e2-8c7c-d4ae52e62bcc/document-image9cropped.jpg?auto=webp&fit=crop&height=675&width=1200"} />
                                                <img src={"https://i.pinimg.com/originals/5f/b6/2b/5fb62bc35ee40f79fa6932351f0808db.png"} />
                                                <img src={"https://www.maa.org/sites/default/files/images/upload_library/46/Curtin-Hudde/Descartes-in-van-Schooten-1637.png"} />
                                                <img src={"https://explorable.com/images/copernicus-sky.jpg"} />
                                                <img src={"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/durers-perspective-drawing-of-a-lute-science-source.jpg"} />
                                            </div>
                                            <div className={"text-container"} style={{ transform: `translateY(calc(${-progress} * (100% - 100vh)))` }}>
                                                {
                                                    (() => {
                                                        const elems = []

                                                        for(let i = 0;i<207;i++){
                                                            elems.push(
                                                                <div key={i} className={"header-font"}>Mathematics</div>
                                                            )
                                                        }

                                                        return elems
                                                    })()
                                                }
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        )} />
                        <ScrollTracker realScrollHeight={600} TrackingComponent={({ progress }) => (
                            <div className={"sticky-container"}>
                                {
                                    progress == 0 ? (
                                        <div className={"rainbow-container"}>
                                            <FadeIn>
                                                <div className={"header-font large-text"}>Intersectionality</div>
                                            </FadeIn>
                                        </div>
                                    ) : (
                                        <React.Fragment>
                                            <div className={"images-container"} style={{ transform: `translateX(calc(${-1 + progress} * (100% - 100vw)))` }}>
                                                <img src={"https://monalisa.org/wp-content/uploads/2012/09/blue_head1-940x493.jpg"} />
                                                <img src={"https://www.goldennumber.net/wp-content/uploads/raphael-athens-two-men-golden-ratio.gif"} />
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhy8ABDsKbpwhZSZe9kb9sytycAa6_pbt0xb3o3zaxXoJPopR1Egrlf_JNbGhmsxVKxI&usqp=CAU"} />
                                                <img src={"https://1.bp.blogspot.com/-e5CxT1TJ_bY/Xzgn4jdqwNI/AAAAAAAAlD0/AMFDKiMkRxsbIDKFp-zXJNwci5Z1dWw4QCLcBGAsYHQ/s1156/Screen%2BShot%2B2020-08-15%2Bat%2B2.19.07%2BPM.png"} />
                                                <img src={"https://images.squarespace-cdn.com/content/v1/543d38c8e4b0df5266e3502f/1587227899741-YI6K06WLRGTOUSKZPKEG/IMG_1126.jpeg"} />
                                            </div>
                                            <div className={"text-container"} style={{ transform: `translateY(calc(${-progress} * (100% - 100vh)))` }}>
                                                {
                                                    (() => {
                                                        const elems = []

                                                        for(let i = 0;i<203;i++){
                                                            elems.push(
                                                                <div key={i} className={"header-font"}>Intersectionality</div>
                                                            )
                                                        }

                                                        return elems
                                                    })()
                                                }
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        )} />
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default HomePage