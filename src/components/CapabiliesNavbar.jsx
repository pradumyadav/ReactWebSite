import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoCombo from './LogoCombo';
import Navitem from './Navitem';
import DropdownIcon from './DropdownIcon';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import RightArrow from './RightArrow';

export default function AboutNavbar({ position = 'relative' }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const navItems = [
        { title: 'Home', link: '/', dropdown: false },
        { title: 'About', link: '/about', dropdown: true },
        { title: 'Capabilities', link: '/capabilities', dropdown: true },
        { title: 'Career', link: '#', dropdown: true },
        { title: 'Industries', link: '/industries', dropdown: true },
        { title: 'Insights', link: '/insights', dropdown: true },
        { title: 'Services', link: '/services', dropdown: true },
        { title: 'Gallery', link: '/gallery', dropdown: false },
        { title: 'Blogs', link: '/blog', dropdown: false },
    ];

    const renderDropdown = (index) => {
        switch (index) {
            case 1: // About
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="w-5/6 flex flex-col items-center justify-center bg-white shadow-xl border-2 py-4">
                            <Link
                                to={'/about'}
                                className="w-full h-10 text-xl flex items-center justify-start px-6 gap-4"
                            >
                                Overview <RightArrow color="black" />
                            </Link>
                            <div className="grid grid-cols-6 gap-4 p-6 w-full ">
                                <DropdownSection
                                    title="Our Leadership"
                                    links={[
                                        {
                                            title: 'Leadership Team',
                                            href: '/leadership',
                                        },
                                    ]}
                                />
                                <DropdownSection
                                    title="Our People"
                                    links={[
                                        { title: 'Team', href: '/our-people' },
                                        {
                                            title: 'Alliances',
                                            href: '/our-people',
                                        },
                                        {
                                            title: 'Our Experts - "ProXperts"',
                                            href: '/our-people',
                                        },
                                    ]}
                                />
                                <DropdownSection
                                    additionalCSS={'col-span-2'}
                                    title="Vision, Mission, Purpose & Values"
                                    links={[
                                        {
                                            title: 'Vision',
                                            href: '/purpose-vision',
                                        },
                                        {
                                            title: 'Mission',
                                            href: '/purpose-vision',
                                        },
                                        {
                                            title: 'Purpose',
                                            href: '/purpose-vision',
                                        },
                                        {
                                            title: 'Values',
                                            href: '/purpose-vision',
                                        },
                                    ]}
                                />
                                <DropdownSection
                                    additionalCSS={'col-span-2'}
                                    title="Our History"
                                    links={[
                                        {
                                            title: 'Our Focus',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Business Coaching & Executive Coaching',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Aligning Sales & Marketing Teams',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Redefining Operations Strategies and Excellence',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Cost Transformation',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Global Supply Chain and Procurement',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Strategic Alliances',
                                            href: '/history',
                                        },
                                        {
                                            title: 'Our Approach',
                                            href: '/history',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2: // Capabilities
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="w-5/6 flex flex-col items-center justify-center bg-white shadow-xl border-2 py-4">
                            <div className="w-full flex items-center px-6 gap-4">
                                <Link
                                    to={'/capabilities'}
                                    className="w-1/4 h-10 text-xl flex items-center gap-4"
                                >
                                    Advisory Overview <RightArrow color="black" />
                                </Link>
                                <Link
                                    to={'/consultingoverview'}
                                    className="w-3/4 h-10 text-xl flex items-center gap-4"
                                >
                                    Consulting Overview <RightArrow color="black" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-6 w-full">
                                <DropdownSection
                                    title="Advisory"
                                    links={[
                                        {
                                            title: 'Leadership Team',
                                            href: '/leadership',
                                        },
                                        {
                                            title: 'Amit Approach',
                                            href: '/leadership',
                                        },
                                        {
                                            title: 'Why Choose Amit Mittal for Advisory Services?',
                                            href: '/leadership',
                                        },
                                    ]}
                                />
                                <div className="flex flex-col items-center justify-center col-span-3 gap-5">
                                    <div className='w-full flex items-start gap-10 justify-between'>
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="Projects"
                                            links={[
                                                {
                                                    title: 'Plant Layout',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Technical Consulting',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Manpower Planning',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Process Flow',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Material Flow',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Warehousing Solutions',
                                                    href: '/purpose-vision',
                                                },
                                            ]}
                                        />
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="DIGITALISATION AND AUTOMATION"
                                            links={[
                                                {
                                                    title: 'Core Services',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Impact',
                                                    href: '/purpose-vision',
                                                },

                                            ]}
                                        />
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="OPERATIONS & PRODUCTIVITY IMPROVEMENT"
                                            links={[
                                                {
                                                    title: 'Productivity and Efficiency improvement',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Delivery Performance Program',
                                                    href: '/purpose-vision',
                                                },

                                            ]}
                                        />
                                    </div>
                                    <div className='w-full flex items-start gap-10 justify-between'>
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="People and Organizational Performance"
                                            links={[
                                                {
                                                    title: 'ROLES AND RESPONSIBILITIES',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'KPIs and KRAs',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Performance Evaluation System',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Incentives / Variable Pay Structuring',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Annual Appraisal Systems',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Warehousing Solutions',
                                                    href: '/purpose-vision',
                                                },
                                            ]}
                                        />
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="GENERAL MANAGEMENT & STRATEGY"
                                            links={[
                                                {
                                                    title: 'Dream to Success.',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: 'Time Management Program',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: '12 WEEK MANAGEMENT',
                                                    href: '/purpose-vision',
                                                },

                                            ]}
                                        />
                                        <DropdownSection
                                            additionalCSS={'w-1/3'}
                                            title="GROWTH MARKETING AND SALES"
                                            links={[
                                                {
                                                    title: 'New Age Marketing ',
                                                    href: '/purpose-vision',
                                                },
                                                {
                                                    title: '12-Week Sales Masterclassm',
                                                    href: '/purpose-vision',
                                                },

                                            ]}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 3: // Career
                return (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-52 bg-white shadow-xl border-2 border-slate-200">
                        <ul className="py-2">
                            <DropdownItem title="Article" href="/article" />
                            <DropdownItem title="News" href="/news" />
                            <DropdownItem title="Interview" href="/interview" />
                            <DropdownItem
                                title="Tender Update"
                                href="/tender-update"
                            />
                            <DropdownItem
                                title="Case Study"
                                href="/case-study"
                            />

                            <DropdownItem
                                title="Products Update"
                                href="/products-update"
                            />
                        </ul>
                    </div>
                );
            case 4: // Industries
                return (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-52 bg-white shadow-xl border-2 border-slate-200">
                        <ul className="py-2">
                            <DropdownItem title="Coaching" href="/coaching" />
                            <DropdownItem
                                title="Consulting"
                                href="/consulting"
                            />
                        </ul>
                    </div>
                );
            case 5: // Insights
                return (
                    <div className="fixed z-50 w-screen top-20 left-0 flex h-auto items-center justify-center">
                        <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-[80vw] bg-white shadow-xl border-2">
                            <div className="flex p-6">
                                <div className="w-1/5">
                                    <ul className="space-y-2">
                                        <li className="font-semibold hover:text-gray-600 cursor-pointer">
                                            Latest Insights
                                        </li>
                                        <li className="font-semibold hover:text-gray-600 cursor-pointer">
                                            Market Trends
                                        </li>
                                        <li className="font-semibold hover:text-gray-600 cursor-pointer">
                                            Industry Reports
                                        </li>
                                        <li className="font-semibold hover:text-gray-600 cursor-pointer">
                                            Case Studies
                                        </li>
                                        <li className="font-semibold hover:text-gray-600 cursor-pointer">
                                            Whitepapers
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-4/5 flex justify-between">
                                    {[5, 6, 7, 8].map((i) => (
                                        <div key={i} className="w-1/4 p-2">
                                            <img
                                                src={`https://picsum.photos/id/${i}/200`}
                                                alt={`Insight ${i}`}
                                                className="w-full h-40 object-cover"
                                            />
                                            <p className="text-sm font-bold mt-2">
                                                Latest Insight {i}
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                July 25, 2024
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 6: // Services
                return (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-52 bg-white shadow-xl border-2">
                        <ul className="py-2">
                            <DropdownItem title="DIGITAL" href="/digital" />
                            <DropdownItem
                                title="CONSULTANCY"
                                href="/consultancy"
                            />
                            <DropdownItem title="JOB" href="/job" />
                        </ul>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <header
            className={`flex-col w-full flex justify-center items-center shadow-lg h-20 ${position === 'relative'
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
                <div className="w-1/5 h-full flex items-start justify-end gap-4 ">
                    <Navitem title="Sign In" path="/sign-in" />
                    <Navitem title="Subscribe" path="/subscribe" />
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
