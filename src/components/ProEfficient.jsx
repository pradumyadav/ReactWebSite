import React, { useState } from 'react'
import AboutNavbar from '../components/AboutNavbar';
import Capabilitiesbanner from '../components/Capabilitiesbanner';
import CapabilitiesMainCard from '../components/CapabilitiesMainCard';
import ServiceCard from '../components/ServiceCard';
import Opportunity from '../components/Opportunity';
import HelpYou from '../components/HelpYou';
import Footer from '../components/Footer';
import ServiceTabs from '../components/ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function ProEfficient() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Process Analysis',
            description:
                'Conducting a thorough analysis of current workflows, systems, and practices helps identify bottlenecks and inefficiencies. This process enables the development of actionable strategies to optimize operations by improving workflows, implementing automation, and better allocating resources.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Lean Manufacturing',
            description:
                'Applying lean manufacturing principles focuses on eliminating waste and optimizing resource use. Techniques such as value stream mapping, 5S, and continuous improvement (Kaizen) are used to streamline processes, improve workflows, and remove non-value-added activities for a more efficient production environment.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Automation and Technology Integration',
            description:
                'Integrating advanced technologies and automation solutions, such as robotics, IoT, and real-time data analytics, enhances production speed and consistency. Automation reduces manual intervention by handling repetitive tasks, leading to fewer errors and increased accuracy.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Plant Layout Optimization',
            description:
                'Optimizing plant layouts involves strategically arranging equipment, workstations, and storage to maximize efficiency and streamline material flow. Effective layout design reduces movement, handling times, and downtime, leading to improved production processes and coordination.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Employee Training and Skill Development',
            description:
                'Comprehensive training programs enhance employee skills and capabilities, improving their understanding of new technologies and processes. Structured training boosts productivity and operational effectiveness by equipping employees with the knowledge needed to perform their roles effectively.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Quality Management',
            description:
                'Robust quality control systems ensure consistent product quality and compliance with industry standards through thorough inspections, standardized testing, and detailed documentation. This approach helps detect and address defects early, reducing the risk of defective products reaching customers.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Supply Chain Optimization',
            description:
                'Optimizing supply chain processes involves improving each stage from procurement to delivery. This includes enhancing supplier relationships, optimizing inventory management, and reducing lead times to balance stock levels and demand effectively.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Performance Metrics and Benchmarking',
            description:
                'Establishing key performance indicators (KPIs) and benchmarks allows for measurable targets and standards. By monitoring and analyzing performance against these KPIs, you can identify areas for improvement, make informed adjustments, and track progress over time.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Improvement',
            description:
                'Encouraging a culture of continuous improvement involves motivating employees to seek and implement process enhancements. Providing ongoing support and actively monitoring progress helps sustain improvements and drives ongoing performance gains.',
            img: "assets/images/NoImage.png"
        }
    ];
    
    const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/277.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/278.webp',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/282.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/280.jpg',
            link: '#',
        },
    ];
    const opportunityItems2 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/288.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/285.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/286.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/287.jpg',
            link: '#',
        },
    ];
    const toggleCards = () => {
        if (isShowingMore) {
            if (visibleCards < services.length) {
                setVisibleCards(prevCount => prevCount + 1);
            }
            if (visibleCards === services.length - 1) {
                setIsShowingMore(false);
            }
        } else {
            if (visibleCards > 1) {
                setVisibleCards(prevCount => prevCount - 1);
            }
            if (visibleCards === 2) {
                setIsShowingMore(true);
            }
        }
    };
    return (
        <>
            {/* <AboutNavbar />
    <Capabilitiesbanner title={"Productivity and Efficiency improvement"} des={"Enhancing operational performance by optimizing workflows and minimizing waste."}/> */}
            <div className="max-w-8xl mx-auto px-4">

                <CapabilitiesMainCard
                    details1={{
                        title: 'Productivity & Efficiency improvement',
                        des: 'At Madasky Consulting, we specialize in providing a comprehensive range of services designed to enhance productivity in manufacturing processes. Our expert guidance and innovative solutions lead to increased efficiency, reduced costs, and enhanced competitiveness. Here are the key services we offer to achieve these goals.',
                        img: '/assets/images/400.png',
                    }}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl text-center font-bold text-gray-800 mb-9 mt-6">
                    HOW WE HELP CLIENTS
                </h2>
                <div>
                     {services.slice(0, visibleCards).map((service, index) => (
    <CapabilitiesCard 
        key={index}
        title={service.title}
        description={service.description}
        img={service.img}
        index={index} 
    />
))}
                </div>
                {visibleCards > 0 && visibleCards < services.length && (
                    <div className="text-center mt-6">
                        <button 
                            onClick={toggleCards}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {isShowingMore ? "Show More" : "Show Less"}
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
