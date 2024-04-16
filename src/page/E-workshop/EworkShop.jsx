import React, { useState } from 'react';

const EworkShop = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/1TSkkxu8on0");

    const handleVideoClick = (videoUrl) => {
        setCurrentVideo(videoUrl);
    };

    return (
        <div className="glass py-14">
            <div className="max-w-4xl mx-auto px-4">
                {/* Video Section */}
                <div className="mb-8 relative rounded-lg shadow-lg">
                    <iframe
                        className="w-full h-96 rounded-xl"
                        src={currentVideo}
                        title="E-Workshop Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text Content */}
                <div className="mb-8 text-gray-200">
                    <h2 className="text-3xl font-bold mb-4">E-Workshop Title</h2>
                    <p className="text-lg">
                        This is some text describing the e-workshop. You can provide information about what participants
                        will learn, who will be speaking, and any other relevant details.
                    </p>
                </div>

                {/* Related Videos Section */}
                <div className="mb-8 text-gray-200">
                    <h3 className="text-2xl font-bold mb-4">Related Videos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Example related video cards */}
                    
                        <div className="bg-gray-800 rounded-lg shadow-md p-4" onClick={() => handleVideoClick("https://www.youtube.com/embed/_44DUadtPjo")}>
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                                src="https://www.youtube.com/embed/_44DUadtPjo"
                                alt="Related Video"
                            />
                            <h4 className="text-lg font-semibold mb-2">Related Video Title 1</h4>
                            <p className="text-sm">
                                Short description of the related video content.
                            </p>
                        </div>
                        {/* Add more related video cards here */}
                        <div className="bg-gray-800 rounded-lg shadow-md p-4" onClick={() => handleVideoClick("https://youtu.be/_Z9TvCjDnAk")}>
                            <img
                                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                                src="https://via.placeholder.com/300x200"
                                alt="Related Video"
                            />
                            <h4 className="text-lg font-semibold mb-2">Related Video Title 2</h4>
                            <p className="text-sm">
                                Short description of the related video content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EworkShop;
