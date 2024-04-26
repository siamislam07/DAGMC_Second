import { useEffect, useState } from "react";
import FirstImage from "../../components/FirstImage";
import PageTitle from "../../components/PageTitle";
import SecendImage from "../../components/SecendImage";
// import Center from "../../utilits/Center";
import About from "../About/About";


import Email from "../Email/Email";
import DebatePage from "../../components/DebatePage";




const Home = () => {
    


    return (
        <>


            


            <PageTitle title="Home" />
            <FirstImage />
            <SecendImage />
            <DebatePage/>
            <Email />



        </>
    );
};

export default Home;