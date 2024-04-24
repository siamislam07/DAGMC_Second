import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { FaFan } from "react-icons/fa";

const Debatepage = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const data = [
        {
            title: "1",
            description: "সংসদীয়",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff]",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500 ",
            aos: 'fade-right'
        },
        {
            title: "2.Public Speaking Abilities",
            description: " Debating enhances public speaking skills by encouraging individuals to articulate their thoughts clearly, confidently, and persuasively in front of an audience. This is invaluable for presentations, job interviews, and leadership roles.",

            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",

        },
        {
            title: "3.Research Skills",
            description: " Engaging in debates necessitates thorough research to gather evidence, statistics, and examples to support one's arguments. Participants learn how to navigate various sources, assess credibility, and synthesize information effectively.",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500",
            aos: 'fade-left'
        },
        {
            title: "4",
            description: "সংসদীয়",
            commonClass: "card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 border-[#00f7ff] ml-96",

            hoverClass: "before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-teal-500 ",
            aos: 'fade-right'
        }


    ]



    return (

        <>
            <div id="aboutUs" className="w-full md:mx-auto md:mt-56 lg:mx-auto max-w-6xl mx-auto">
                {/* <h1 className="text-4xl text-center font-bold">Our Class Service</h1> */}
                {/* <img className="border-[#00f7ff] border-b mx-auto mb-24  shadow-2xl shadow-[#00f7ff]" src="https://capsule-render.vercel.app/api?type=waving&height=250&color=white&text=বিতর্কের%20নিয়মাবলী&descAlign=60&descAlignY=60&textBg=false&reversal=false&fontAlign=50&fontAlignY=50&section=header&fontColor=00f7ff&fontSize=40&rotate=0&strokeWidth=0" alt="" /> */}
                <img className="border-[#00f7ff] border-b mx-auto mb-24 shadow-2xl shadow-[#00f7ff]" src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=বিতর্কের%20নিয়মাবলী&textBg=false&animation=fadeIn&stroke=00f7ff&strokeWidth=-1" alt="" />

                <div className="w-full  max-w-6xl mx-auto p-3  ">

                    <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-2 
                                    lg:grid-cols-2 gap-4 md:gap-14 mb-28 mx-auto ">

                        <div data-aos="fade-right" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <a href="https://5e7b7290cb459.site123.me/%E0%A6%AC-%E0%A6%A4%E0%A6%B0-%E0%A6%95-%E0%A6%B0-%E0%A6%A8-%E0%A7%9F%E0%A6%AE-%E0%A6%AC%E0%A6%B2/%E0%A6%B8-%E0%A6%B8%E0%A6%A6-%E0%A7%9F" target="_blank"><h2 className="card-title justify-center text-2xl transition-all">সংসদীয়
                                </h2></a>

                            </div>
                        </div>

                        <div data-aos="fade-left" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff]  ">
                            <div className=" card-body">
                                <a href="https://5e7b7290cb459.site123.me/%E0%A6%AC-%E0%A6%A4%E0%A6%B0-%E0%A6%95-%E0%A6%B0-%E0%A6%A8-%E0%A7%9F%E0%A6%AE-%E0%A6%AC%E0%A6%B2/%E0%A6%AC-%E0%A6%B0-%E0%A7%9F-%E0%A6%B0" target="_blank"><h2 className="card-title justify-center text-2xl transition-all">বারোয়ারী</h2></a>

                            </div>
                        </div>

                        <div className="">
                            <FaFan className="relative left-16 md:left-[500px] animate-spin shadow-[#00f7ff] drop-shadow-xl shadow-2xl rounded-full text-[#00f7ff]" size={140}/>
                        </div>
                            <div></div>

                        <div data-aos="fade-right" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <a href="https://5e7b7290cb459.site123.me/%E0%A6%AC-%E0%A6%A4%E0%A6%B0-%E0%A6%95-%E0%A6%B0-%E0%A6%A8-%E0%A7%9F%E0%A6%AE-%E0%A6%AC%E0%A6%B2/%E0%A6%B8%E0%A6%A8-%E0%A6%A4%E0%A6%A8" target="_blank"><h2 className="card-title justify-center text-2xl transition-all ">সনাতনী</h2></a>

                            </div>
                        </div>


                        <div data-aos="fade-left" className="before:absolute  before:origin-top-left before:-z-10 before:h-full before:w-full  before:scale-y-0 before:bg-[#00f7ff] before:rounded-xl before:transition-transform before:duration-500  hover:text-black before:hover:scale-y-100 shadow-[#00f7ff] card max-w-80 md:max-w-full mx-auto w-full p-3  font-bold bg-[#00f7ff] shadow-2xl relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors  before:left-0 before:top-0  text-[#00f7ff] before:content-['']  border-[#00f7ff] ">
                            <div className=" card-body">
                                <a href="https://5e7b7290cb459.site123.me/%E0%A6%AC-%E0%A6%A4%E0%A6%B0-%E0%A6%95-%E0%A6%B0-%E0%A6%A8-%E0%A7%9F%E0%A6%AE-%E0%A6%AC%E0%A6%B2/%E0%A6%AC-%E0%A6%AA"><h2 className="card-title justify-center text-2xl transition-all">বিপি</h2></a>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    );
};

export default Debatepage;



