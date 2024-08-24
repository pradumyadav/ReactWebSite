import React from 'react'
import CustomButton from './CustomButton';


export default function Capabilitiesbanner({title ,des}) {
    return (
        <div className="w-full bg-custom-gradient h-[90vh] flex items-center justify-center relative">
         
            <div className="w-1/2 h-full flex flex-col items-start justify-center text-white p-20 gap-6">
                <h2 className="text-5xl uppercase font-bold">
                   {title}
                </h2>
                <p className="text-2xl">
                {des} 
                </p>
                <CustomButton
                    title="Learn More ..."
                    customStyles="text-blue-500 bg-white"
                />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
               <img src="/assets/images/289.jpg" alt="Image"/>
            </div>
        </div>
    );
}
