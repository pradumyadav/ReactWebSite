import React, { useEffect, useState } from 'react';
import AboutNavbar from '../components/AboutNavbar';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import Footer from '../components/Footer';
import BaseURL from './BaseURL';
import axios from 'axios';

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [gallery, setGallery] = useState([]);

    const array = [
        '/assets/images/261.png',
        '/assets/images/264.png',
        '/assets/images/265.png',
        '/assets/images/266.png',
        '/assets/images/267.png',
        '/assets/images/227.png',
        '/assets/images/228.png',
        '/assets/images/229.png',
        '/assets/images/262.png',
        '/assets/images/230.png',
        '/assets/images/231.png',
        '/assets/images/247.png',
        '/assets/images/234.png',
        '/assets/images/235.png',
        '/assets/images/251.png',
        '/assets/images/237.png',
        '/assets/images/238.png',
        '/assets/images/239.png',
        '/assets/images/253.png',
        '/assets/images/242.png',
        '/assets/images/243.png',
        '/assets/images/244.png',
        '/assets/images/242.png',
        '/assets/images/246.png',
        '/assets/images/247.png',
        '/assets/images/248.png',
        '/assets/images/249.png',
        '/assets/images/250.png',
        '/assets/images/251.png',
        '/assets/images/252.png',
        '/assets/images/253.png',
        '/assets/images/254.png',
        '/assets/images/255.png',
        '/assets/images/256.png',
        '/assets/images/257.png',
        '/assets/images/252.png',
        '/assets/images/260.png',
        '/assets/images/268.png',
        '/assets/images/269.png',
        '/assets/images/270.png',
        '/assets/images/271.png',

    ];

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + array.length) % array.length
        );
        setTimeout(() => setIsTransitioning(false), 500); // Match this with your transition duration
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };


    useEffect(() => {
        getGallery();
    }, []);

    const getGallery = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getGallery`);
        console.log(response.data.gallery);
        setGallery(response.data.gallery);
    };

    return (
        <>
            <AboutNavbar />
            <div className="bg-[#f0f0f0]">
                <div className=" mx-auto ">
                    <div className="relative overflow-hidden h-96 mb-8">
                        <img
                            src="/assets/images/259.jpg"
                            alt="Gallery Header"
                            className="w-full h-full object-cover shadow-md"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/30 to-black/70"
                            aria-hidden="true"
                        ></div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                            aria-hidden="true"
                        ></div>
                        <h2 className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold font-serif text-white text-center left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg animate-fade-in">
                            Photo Gallery
                        </h2>
                        <nav className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 text-sm font-medium"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <a
                                            href="#"
                                            className="hover:text-blue-400 ml-1 text-sm font-medium"
                                        >
                                            Gallery
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-1 text-sm font-medium text-gray-300">
                                            Photo Gallery
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
                            {array.map((image, index) => (
                                <div
                                    className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        gridRowEnd: `span ${Math.ceil(Math.random() * 2) + 1
                                            }`,
                                    }}
                                    key={index}
                                >
                                    <img
                                        src={image}
                                        alt={`Photo ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <h3 className="text-lg font-serif text-white">
                                            Photo Title {index + 1}
                                        </h3>
                                        <p className="text-sm text-gray-300 mt-1">
                                            A brief description of the photo.
                                            <br /> Lorem ipsum dolor sit ...
                                        </p>
                                    </div>
                                    <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-800"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>

                                        <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-800"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {gallery.map((image, index) => (
                                <div
                                    className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        gridRowEnd: `span ${Math.ceil(Math.random() * 2) + 1
                                            }`,
                                    }}
                                    key={index}
                                >
                                    <img
                                        src={`/uploads/${image.blogImage}`}
                                        alt={`Photo ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <h3 className="text-lg font-serif text-white">
                                            Photo Title {index + 1}
                                        </h3>
                                        <p className="text-sm text-gray-300 mt-1">
                                            A brief description of the photo.
                                            <br /> Lorem ipsum dolor sit ...
                                        </p>
                                    </div>
                                    <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-800"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>

                                        <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-800"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="w-full border-t-2 border-gray-300 mt-8" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
