import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoCombo from './LogoCombo';
import Navitem from './Navitem';
import DropdownIcon from './DropdownIcon';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import AboutNewItem from './AboutNewItem';

export default function AboutNavbar({ position = 'relative' }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const navItems = [
        { title: 'Home', link: '/home', dropdown: false },
        { title: 'About Us', link: '#', dropdown: true },
        { title: 'Industries', link: '/industries', dropdown: true },
        { title: 'Capabilities', link: '/capabilities', dropdown: true },
        { title: 'Career', link: '/careers', dropdown: false },
        { title: 'Insights', link: '#', dropdown: true },
    ];

    const industries = [
        { title: 'Manufacturing Industries', link: '/manufaturing',img:"/assets/images/339.png" },
        { title: 'E-Commerce Industries', link: '/e-commerce',img:"/assets/images/manufacturing.png" },
        { title: 'Tourism', link: '/tourisum',img:"/assets/images/manufacturing.png" },
        { title: 'Construction', link: '/construction',img:"/assets/images/manufacturing.png" },
        { title: 'Real Estate', link: '/real-state',img:"/assets/images/manufacturing.png" },
        { title: 'Fashion & Jewellery', link: '/industries',img:"/assets/images/manufacturing.png" },
        { title: 'Financial Services', link: '/financial-services' ,img:"/assets/images/manufacturing.png"},
        { title: 'Trading & Wholesale', link: '/tranding-wholesale',img:"/assets/images/manufacturing.png" },
    ];

    const sortedIndustries = industries.sort(
        (a, b) => a.title.length - b.title.length
    );

    console.log(sortedIndustries);

    const renderDropdown = (index) => {
        switch (index) {
            case 1: // About
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="w-[50%] flex flex-row items-start justify-center bg-white shadow-xl border-2 h-[40vh]">
                            {/* <div className="w-[25%]">
                                <div className="flex flex-row mt-8 relative">
                                    <div className="">
                                        <Link to={'/about'} className="flex text-center text-xl font-semibold">
                                            <h2>About Us Overview</h2>
                                        </Link>
                                    </div>
                                    <div className="bg-[#e9e8e8] h-[25vh] w-[1px] ml-10 absolute right-0 rounded-full"></div>
                                </div>
                            </div> */}
                            <div className="w-[50%] px-6">
                                <div className="flex flex-row mt-8 pl-4 relative">
                                    <div className="flex flex-col items-start justify-start gap-6">
                                        <div className="flex text-center text-xl font-semibold">
                                            <h2>Who We Are</h2>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-1">
                                            <AboutNewItem
                                                link="/Our-People"
                                                title="Our People"
                                            />
                                            <AboutNewItem
                                                link="/history"
                                                title="Our History"
                                            />
                                            <AboutNewItem
                                                link="/aspiration"
                                                title="Our Aspiration"
                                            />
                                            <AboutNewItem
                                                link="/leadership"
                                                title="Our Leadership"
                                            />
                                            <AboutNewItem
                                                link="/purpose-vision"
                                                title="Purpose, Mission, Vision and Values"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-[#e9e8e8] rounded-full h-[30vh] w-[1px] ml-10 absolute right-0"></div>
                                </div>
                            </div>

                            <div className="w-[50%]">
                                {/* <div className="flex flex-row  mt-8 relative">
                                    <div className="">
                                        <div className="flex">
                                            <h2>Solutions</h2>
                                            <div className="pt-1 pl-2">
                                                <FaArrowRightLong />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <h3 className="font-bold">
                                                ADVISORY
                                            </h3>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-bold">
                                                SERVICES
                                            </h3>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex flex-row mt-8">
                                    <div className="pl-6">
                                        <div className="flex text-center text-xl font-semibold">
                                            <Link
                                                to={'/how-we-work'}
                                                className="flex text-center text-xl font-semibold"
                                            >
                                                <h2>How We Work</h2>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2: // Industries
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="w-[75%] flex flex-row items-start justify-center bg-white shadow-xl border-2 h-[25vh] p-6">
                            <div className="w-full grid grid-cols-4 place-items-start place-content-start gap-9">
                                {sortedIndustries.map((industry, index) => (
                                    <AboutNewItem
                                        key={index}
                                        title={industry.title}
                                        link={industry.link}
                                        // img={industry.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 3: // Capabilities
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="w-[70%] flex flex-row items-start justify-center bg-white shadow-xl border-2 h-[50vh]">
                            <div className="w-[25%]">
                                <div className="flex flex-row mt-8 relative">
                                    <div className="">
                                        <Link
                                            to="/advisory"
                                            className="flex text-center text-xl font-semibold"
                                        >
                                            <h2>Advisory</h2>
                                        </Link>
                                    </div>

                                    <div className="bg-[#e9e8e8] h-[40vh] w-[1px] ml-10 absolute right-0 rounded-full"></div>
                                </div>
                            </div>

                            <div className="w-[40%]">
                                <div className="flex flex-row mt-8 pl-4 relative">
                                    <div className="flex flex-col items-start justify-start gap-6">
                                        <div className="flex text-center text-xl font-semibold">
                                            <h2>Consulting</h2>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-2">
                                            <AboutNewItem
                                                link="/project"
                                                title="Project"
                                            />
                                            <AboutNewItem
                                                link="/growth-marketing-and-sales"
                                                title="Growth Marketing And Sales"
                                            />
                                            <AboutNewItem
                                                link="/digitalisation-and-automation"
                                                title="Digitalisation And Automation"
                                            />
                                            <AboutNewItem
                                                link="/general-management-and-strategy"
                                                title="General Management & Strategy"
                                            />
                                            <AboutNewItem
                                                link="/operations-and-productivity-improvement"
                                                title="Operations & Productivity Improvement"
                                            />
                                            <AboutNewItem
                                                link="/people-and-organizational-performance"
                                                title="People And Organizational Performance"
                                            />
                                            <AboutNewItem
                                                link="/financial-performance-and-cash-flow-management"
                                                title="Financial Performance And Cash Flow Management"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-[#e9e8e8] rounded-full h-[40vh] w-[1px] ml-10 absolute right-0"></div>
                                </div>
                            </div>

                            <div className="w-[25%]">
                                <div className="flex flex-row mt-8">
                                    <div className="pl-[2.8rem]">
                                        <Link
                                            to={'/solutions'}
                                            className="flex text-center text-xl font-semibold"
                                        >
                                            <h2>Solutions</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 4: // Career
                return <></>;
            case 5: // Insights
                return (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-52 bg-white shadow-xl border-2 border-slate-200">
                        <ul className="py-2">
                            <DropdownItem title="Blogs" href="/blog" />
                            <DropdownItem title="Events " href="/events " />
                            <DropdownItem title="Gallery" href="/gallery" />
                            <DropdownItem title="Podcast" href="#" />
                            <DropdownItem title="On Demand Webinar" href="#" />
                        </ul>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <header
            className={`flex-col w-full flex justify-center items-center shadow-lg h-20 ${
                position === 'relative'
                    ? 'relative bg-white'
                    : 'absolute top-0 left-0 z-[99] bg-white'
            }`}
        >
            <nav className="w-[95%] h-20 flex items-center justify-between relative">
                <div className="w-1/5 h-full flex items-center justify-center gap-2">
                    <Sidebar />
                    <LogoCombo />
                </div>

                <div className="w-3/5 h-full flex justify-evenly items-center px-14 gap-4">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-full flex items-center justify-center"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to={item.link}
                                className="font-semibold flex items-center gap-1 text-black hover:text-[#e33512] transition-colors"
                            >
                                {item.title}
                                {item.dropdown && <DropdownIcon />}
                            </Link>
                            {activeMenu === index &&
                                item.dropdown &&
                                renderDropdown(index)}
                        </div>
                    ))}
                </div>
                <div className="w-1/5 h-full flex items-center justify-end gap-4 ">
                    <Navitem title="Contact Us" path="/contact-us" />
                </div>
            </nav>
        </header>
    );
}

const DropdownSection = ({ title, links, additionalCSS }) => (
    <div className={`${additionalCSS}`}>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <ul>
            {links.map((link, index) => (
                <li key={index} className="mb-1">
                    <Link
                        to={link.href}
                        className="text-base hover:text-primary after:w-0 hover:after:w-full after:h-0.5 after:absolute relative after:bottom-0 after:left-0 after:transition-all after:duration-300 after:bg-primary"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const DropdownItem = ({ title, href }) => (
    <li>
        <Link to={href} className="block px-4 py-2 text-sm hover:bg-gray-100">
            {title}
        </Link>
    </li>
);

AboutNavbar.propTypes = {
    position: PropTypes.string,
};

DropdownSection.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    additionalCSS: PropTypes.string,
};

DropdownItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
