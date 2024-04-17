import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import SparkContainer from "@kamiru/react-spark";
import ClickSound from "../components/ClickSound";



const Main = () => {
    const [loading, setLoading] = useState(false)
    // const [isMuted, setIsMuted] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    // const toggleMute = () => {
    //     setIsMuted(prevState => !prevState);
    // };

    return (
        <>
            <SparkContainer randomnessOn={true} className=" ">
                    <ClickSound></ClickSound>
                {loading ? <Loader /> : <>
                    <Navbar />

                    <div className="min-h-[calc(100vh-68px)]">
                        
                        <Outlet>

                        </Outlet>
                    </div>

                    <Footer />
                </>
                }
            </SparkContainer>
        </>
    );
};

export default Main;