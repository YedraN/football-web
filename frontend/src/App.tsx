import './App.css'
import Header from "./components/Header.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import Summary from "./components/index/Summary.tsx";
import Lenis from "@studio-freight/lenis";
import {useEffect} from "react";

function App() {
    // Scroll Smooth
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        })

        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time)
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [])

    return (
    <>
        <Header />
        <Summary />
        <AppRouter />
    </>
  )
}

export default App