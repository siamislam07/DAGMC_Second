import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import SparkContainer from "@kamiru/react-spark";
import ClickSound from "../components/ClickSound";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';


const Main = () => {
    const [loading, setLoading] = useState(false)
    const [mute, setUnmute] = useState(false)

    // const toggleMute = () => {
    //     const audio = document.getElementById("homeAudio");
    //     if (audio) {
    //         if (mute) {
    //             audio.volume = 1;
    //         } else {
    //             audio.volume = 0.4;
    //         }
    //     }
    //     setUnmute(!mute);
    // };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])
    const location = useLocation()
    const noGalleryWork = location.pathname.includes('gallery') || location.pathname.includes('e-workshop')


    return (
        <>
            <SparkContainer randomnessOn={true} className=" ">

                <ClickSound></ClickSound>
                
                    <Navbar />
                    
                    <div className="min-h-[calc(100vh-68px)]">

                        <Outlet>

                        </Outlet>
                    </div>

                    <Footer />
                
                
            </SparkContainer>
        </>
    );
};

export default Main;