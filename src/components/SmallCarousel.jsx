import { useState } from 'react';
import img2 from '/assets/images/133.jpg';
import img3 from '/assets/images/143.jpg';
import img4 from '/assets/images/144.jpg';
import img5 from '/assets/images/126.jpg';
import img6 from '/assets/images/126.jpg';

const logos = [
    { name: 'AWS', src: '/path/to/aws-logo.png' },
    { name: 'Google Cloud', src: img2 },
    { name: 'Microsoft', src: img2 },
    { name: 'Salesforce', src: img3 },
    { name: 'Salesforce', src: img4 },
    { name: 'Salesforce', src: img5 },
    { name: 'Salesforce', src: img6 },
];

export default function SmallCarousel() {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 4;

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex + imagesPerPage >= logos.length
                ? 0
                : prevIndex + imagesPerPage
        );
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex - imagesPerPage < 0
                ? Math.max(logos.length - imagesPerPage, 0)
                : prevIndex - imagesPerPage
        );
    };

    const visibleLogos = logos.slice(startIndex, startIndex + imagesPerPage);

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-xl font-bold mb-4">FEATURED ALLIANCES</h2>
            <div className="flex items-center w-full">
                <button onClick={prevSlide} className="text-3xl font-bold px-4">
                    &lt;
                </button>
                <div className="flex justify-center items-center flex-grow overflow-hidden">
                    {visibleLogos.map((logo, index) => (
                        <img
                            key={startIndex + index}
                            src={logo.src}
                            alt={logo.name}
                            className="w-1/4 p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="text-3xl font-bold px-4">
                    &gt;
                </button>
            </div>
            <div className="flex mt-4 space-x-2">
                {Array(Math.ceil(logos.length / imagesPerPage))
                    .fill()
                    .map((_, index) => (
                        <span
                            key={index}
                            className={`h-3 w-3 rounded-full cursor-pointer ${
                                index === Math.floor(startIndex / imagesPerPage)
                                    ? 'bg-blue-600'
                                    : 'bg-gray-400'
                            }`}
                            onClick={() => setStartIndex(index * imagesPerPage)}
                        ></span>
                    ))}
            </div>
        </div>
    );
}
