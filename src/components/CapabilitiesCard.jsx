import React from 'react'

export default function CapabilitiesCard({ title, description, img, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className="font-sans max-w-[95%] border-gray-200 mx-auto p-10 bg-white">
            <div className={`relative h-auto flex p-10 mb-10 items-center shadow-2xl border-solid border-1 border-gray-200 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className='relative h-[100%]'>
                    <img
                        src={img}
                        alt={title}
                        className="rounded-lg max-w-md h-[30em] object-cover"
                    />
                </div>

                <div className={`w-[55%] ${isEven ? 'pl-14' : 'pr-14'} text-4xl font-bold mb-6`}>
                    <h2 className="mb-5 text-gray-800 text-5xl leading-tight">
                        {title}
                    </h2>
                    <p className="mb-7 text-gray-600 text-xl font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}