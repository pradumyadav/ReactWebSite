import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function AboutVideo({ vid1, title, des }) {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const toggleSound = () => {
        setIsMuted(!isMuted);
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented. User interaction required to play video with sound.");
            });
        }
    };

    return (
        <div className="w-full relative h-screen flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
            <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-start justify-start">
                <video
                    ref={videoRef}
                    src={vid1}
                    className="w-full h-full object-cover"
                    loop
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onCanPlay={handlePlay}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-30 p-20 flex flex-col items-start justify-end text-white">
                <span className="text-3xl">{title}</span>
                <h2 className="text-6xl font-baskervville text-white font-bold mb-6">
                    {des}
                </h2>
                <button 
                    onClick={toggleSound} 
                    className="mt-4 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black focus:outline-none"
                >
                    {isMuted ? (
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Unmute
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                            </svg>
                            Mute
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}

AboutVideo.propTypes = {
    vid1: PropTypes.string,
    title: PropTypes.string,
    des: PropTypes.string
};

AboutVideo.defaultProps = {
    vid1: '',
    title: '',
    des: ''
};