import { useEffect, useState } from "react";
import FirstImage from "../../components/FirstImage";
import PageTitle from "../../components/PageTitle";
import SecendImage from "../../components/SecendImage";
// import Center from "../../utilits/Center";
import About from "../About/About";

import Email from "../Email/Email";




const Home = () => {
    

    return (
        <>
            <audio loop autoPlay>
                <source src="./homeAudiotrimerd.mp3" />
            </audio>

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