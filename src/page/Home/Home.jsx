import { useEffect, useState } from "react";
import FirstImage from "../../components/FirstImage";
import PageTitle from "../../components/PageTitle";
import SecendImage from "../../components/SecendImage";
// import Center from "../../utilits/Center";
import About from "../About/About";


import Email from "../Email/Email";
import Debatepage from "../../components/Debatepage";




const Home = () => {
    


    return (
        <>


            


            <PageTitle title="Home" />
            <FirstImage />
            <SecendImage />
            <Debatepage/>
            <Email />



        </>
    );
};

export default Home;