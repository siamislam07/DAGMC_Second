import { useEffect } from "react";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useQuery } from "@tanstack/react-query";


const Gallery = () => {


    // const [images, setImages] = useState()

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const response = await fetch('/gallery.json');
    //             const data = await response.json();
    //             setImages(data);
    //         } catch (error) {
    //             console.error('Error fetching images:', error);
    //         }
    //     };

    //     fetchImages();
    // }, []);

    const { isPending, data: images, isError, error } = useQuery({
        queryKey: ['panelFirst'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/gallery')
            return res.json()
        }
    })

    if (isPending) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    const reversedImages = images ? [...images].reverse() : [];

    useEffect(() => {
        if (!isPending && !isError) {
            const hoverSkew = (e) => {
                const skewAmount = 20; // Adjust this value for intensity
                const boundingRect = e.target.getBoundingClientRect();
                const offsetX = e.clientX - boundingRect.left - (boundingRect.width / 2);
                const offsetY = e.clientY - boundingRect.top - (boundingRect.height / 2);
                const angleX = (offsetY / boundingRect.height) * skewAmount;
                const angleY = (offsetX / boundingRect.width) * skewAmount;

                e.target.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            };

            const resetSkew = (e) => {
                e.target.style.transform = "none";
            };

            const images = document.querySelectorAll('.skew-on-hover');

            images.forEach(image => {
                image.addEventListener('mousemove', hoverSkew);
                image.addEventListener('mouseleave', resetSkew);
            });

            return () => {
                images.forEach(image => {
                    image.removeEventListener('mousemove', hoverSkew);
                    image.removeEventListener('mouseleave', resetSkew);
                });
            };
        }
    }, [isPending, isError]);
    return (
        <div>
            <PageTitle title="Gallery" />
            <div className="p-5 sm:p-8">
                <div className="columns-1 scale-x-1  gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    {reversedImages?.map(img => (
                        <div key={img?.id} className="relative mb-8 overflow-hidden rounded-lg transform transition-transform hover:scale-105 skew-on-hover">
                            <img
                                src={img?.url}
                                alt="Gallery"
                                className="object-cover  w-full h-full "
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Gallery;