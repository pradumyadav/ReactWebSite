import { useState } from 'react';
import CloseHamburgerIcon from './CloseHamburgerIcon';
import LogoCombo2 from './LogoCombo2';
import SidebarNav from './SidebarNav';


export default function SidebarContent() {

    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen z-[9999] bg-white flex items-center justify-center ${sidebarVisible ? 'flex' : 'hidden'}`}>
            <div className="w-[33rem] h-full flex flex-col bg-dark-blue items-center justify-center">
                <div className="h-20 w-full flex gap-3 border-b-2">
                    <button onClick={() => setSidebarVisible(!sidebarVisible)} className="h-full w-20 flex items-center justify-center border-r-2 cursor-pointer">
                        <CloseHamburgerIcon color="white" />
                    </button>
                    <LogoCombo2 color="white" />
                </div>
                <div className="h-full w-full flex flex-col items-start gap-14 p-10 justify-start">
                    <SidebarNav title="Overview" />
                    <SidebarNav title="Our Leadership" />
                    <SidebarNav title="Our People" />
                    <SidebarNav title="Our Vision, Mission, Purpose & Values" />
                    <SidebarNav title="Our History" />
                    <SidebarNav title="Our Aspiration" />
                    <SidebarNav title="How We Work" />
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center"></div>
        </div>
    );
}
