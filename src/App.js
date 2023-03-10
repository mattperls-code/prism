import React from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/Home"
import ArtPage from "./pages/Art"
import MathPage from "./pages/Math"
import LanguagePage from "./pages/Language"
import SciencePage from "./pages/Science"
import AboutPage from "./pages/About"
import LostPage from "./pages/Lost"

import "./styles.scss"

const App = () => {
    const routeScheme = {
        "/": <HomePage />,
        "/art": <ArtPage />,
        "/math": <MathPage />,
        "/language": <LanguagePage />,
        "/science": <SciencePage />,
        "/about": <AboutPage />,
        "*": <LostPage />
    }

    const router = createBrowserRouter(Object.entries(routeScheme).map(route => ({ path: route[0], element: route[1] })))

    return <RouterProvider router={router} />
}

export default App