import React, { useEffect, useState } from "react"
import { Routes, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

TopBarProgress.config({
    barColors: {
        "0": "#5696f8",
        "1.0": "#5696f8"
    },
    barThickness: 1,
    shadowBlur: 0
});
  

function ProgressBarIndicatorRoutes({children}) {
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if (location.pathname===prevLoc) {
            setPrevLoc('')      
        }
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])

    return (
        <>
            {progress && <TopBarProgress />}
            <Routes>
                { children }
            </Routes>
        </>
    );
}

export default ProgressBarIndicatorRoutes;