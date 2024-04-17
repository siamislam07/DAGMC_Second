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


            


            <PageTitle title="Home" />


            <FirstImage />
            <SecendImage />

            <About />
            <Email />



        </>
    );
};

export default Home;