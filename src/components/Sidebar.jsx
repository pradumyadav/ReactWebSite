import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import SidebarContent from './SidebarContent';

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-full">
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="h-full w-12 flex items-center justify-between  cursor-pointer"
            >
                <HamburgerIcon />
            </button>
            {sidebarOpen ? <SidebarContent /> : null}
        </div>
    );
}
