import { useEffect, useState } from "react";
import FirstImage from "../../components/FirstImage";
import PageTitle from "../../components/PageTitle";
import SecendImage from "../../components/SecendImage";
// import Center from "../../utilits/Center";
import About from "../About/About";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import Email from "../Email/Email";




const Home = () => {
    // const [mute, setUnmute] = useState(false)

    // const toggleMute = () => {
    //     const audio = document.getElementById("homeAudio");
    //     if (audio) {
    //         if (mute) {
    //             audio.volume = 1; // Set volume to full when unmuting
    //         } else {
    //             audio.volume = 0.4; // Set volume to half when muting
    //         }
    //     }
    //     setUnmute(!mute);
    // };


    // const homePageMusic = './homeAudio.mp3'
    return (
        <>


            {/* <audio id="homeAudio" loop autoPlay muted={!mute} >
                <source src="./homeAudio.mp3" />
            </audio> */}


            {/* <button onClick={toggleMute} className="fixed z-10 left-5 md:left-3  top-[550px] md:top-[890px] btn btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none bg-amber-600 hover:bg-amber-900 text-white animate-bounce hover:text-white hover:border-none">
                {mute ? <FaVolumeUp /> : <FaVolumeMute />}
            </button> */}


            <PageTitle title="Home" />
            <FirstImage />
            <SecendImage />

            {/* <PanelImage/> */}
            <About />
            <Email />

            <panelImage />

        </>
    );
};

export default Home;