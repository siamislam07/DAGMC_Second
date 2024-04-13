import { useEffect } from "react";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";


const Gallery = () => {


    const [images, setImages] = useState()

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/gallery.json');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);
    return (
        <div>
            <PageTitle title="Gallery"/>
            <div className="p-5 sm:p-8">
                <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    {images?.map(img => (
                        <img key={img?.id} src={img?.url} alt="Gallery" />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Gallery;