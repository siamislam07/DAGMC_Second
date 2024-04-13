
import { useEffect, useState } from 'react';
import img from '../../image/homeimage2.png';
import fb from '../../image/icons/facebook1.png';
import gmail from '../../image/icons/gmail.png'
import wp from '../../image/icons/whatsapp.png'
import Aos from 'aos';


const PanelFirst = () => {
    const [info, setInfo] = useState()

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/PanelFirst.json');
                const data = await response.json();
                setInfo(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            {/* <PageTitle title="Panel Member"/> */}
            <img className=" mt-10 w-full" src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Panel%20Member&section=header&reversal=false&fontAlignY=50&animation=twinkling&strokeWidth=0&fontSize=33" />



            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-24 ">


                {info?.map((item, i) => (

                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1600" key={i} className='col-span-1 mx-auto group mb-20 overflow-hidden shadow-2xl shadow-[#00f7ff] border-[#00f7ff]'>
                        <div className='flex  mx-auto flex-col gap-2 w-80 border border-[#00f7ff] shadow-2xl shadow-[#00f7ff]  rounded-2xl'>
                            <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                                <img className='object-cover  h-80 p-3 w-full group-hover:scale-110 transition shadow-2xl shadow-[#00f7ff] border-[#00f7ff]'
                                    src={item?.pic}
                                    alt='Room' />
                                {/* <div className='absolute top-3 right-3'>

</div> */}
                            </div>
                            <div className='font-semibold text-white ml-4 mt-0'>{item?.name}</div>

                            <div className='font-light text-[#00f7ff] ml-4'>
                                {item?.title}
                            </div>
                            <div className='avatar mt-2'>
                                <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={item?.fbUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={fb} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div>
                                <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={item?.gmail} target="_blank" rel="noopener noreferrer">
                                        <img src={gmail} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div>
                                <div className="w-8 ml-4 rounded-full    ring-offset-2">
                                    <a href={item?.wp} target="_blank" rel="noopener noreferrer">
                                        <img src={wp} alt="Facebook" className='cursor-pointer' />
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-row justify-end gap-1 mb-4 mr-4'>
                                <div className='flex flex-col items-center justify-end gap-2 ml-40'>

                                    <div className="rating  rating-sm">
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" checked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2  bg-[#00f7ff]" />
                                    </div>
                                    {/* lg */}
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" checked />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#00f7ff]" />
                                    </div>

                                    <div className="rating gap-1 ">
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
                                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default PanelFirst;