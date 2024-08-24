import React from 'react';
import AboutNavbar from './AboutNavbar';
import Capabilitiesbanner from './Capabilitiesbanner';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceCard from './ServiceCard';
import Opportunity from './Opportunity';
import HelpYou from './HelpYou';
import Footer from './Footer';
import ServiceTabs from './ServiceTabs';
import { useState } from 'react';
import CapabilitiesCard from './CapabilitiesCard';
export default function MaterialFlow() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Process Flow',
            description:
                'Ensuring smooth transitions between production stages is vital for maintaining efficiency and minimizing delays. This involves coordinating timing, communication, and resource allocation so that each stage flows seamlessly into the next. By carefully managing handoffs and anticipating potential disruptions, organizations can reduce downtime. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Workstation Placement',
            description:
                'Strategically placing workstations to optimize workflow is key to enhancing efficiency and reducing movement-related delays in production. By arranging workstations in a logical sequence that aligns with the production process, organizations can minimize unnecessary transportation of materials and streamline the flow of work. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Material Handling Equipment',
            description:
                'Using appropriate equipment to facilitate material movement is essential for improving efficiency and reducing manual labor in production. The right equipment, such as conveyors, forklifts, or automated guided vehicles (AGVs), ensures that materials are transported swiftly and safely between workstations, minimizing delays and the risk of damage. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Storage and Inventory Management',
            description:
                'Efficiently managing storage and inventory is crucial for reducing costs and optimizing resource use. By implementing strategies such as just-in-time inventory, accurate demand forecasting, and real-time tracking, organizations can minimize excess stock and storage space requirements. Effective inventory management helps prevent overstocking',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Traffic Flow and Aisles',
            description:
                'Designing clear pathways to minimize congestion is essential for maintaining a smooth and efficient workflow. By creating well-defined routes for the movement of materials, equipment, and personnel, organizations can reduce the risk of bottlenecks and collisions in busy work areas. Clear pathways ensure that everyone can navigate the workspace safely and quickly. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Material Flow Analysis',
            description:
                'Regularly reviewing and optimizing material flow is key to maintaining efficiency and minimizing waste in production processes. By continuously assessing how materials move through the production cycle, organizations can identify inefficiencies, eliminate bottlenecks, and adjust workflows to better align with current demands.  ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Ergonomics and Safety',
            description:
                'Prioritizing worker safety and ergonomic principles is crucial for creating a healthy and productive workplace. By designing workstations, tools, and workflows with ergonomics in mind, organizations can reduce the risk of injury, strain, and fatigue among employees. Ensuring that tasks are performed in a safe and comfortable manner not only protects workers’ well-being but also enhances efficiency and job satisfaction.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Lean Manufacturing Principles',
            description:
                'Implementing lean practices to reduce waste and increase efficiency is a powerful strategy for optimizing operations. Lean principles focus on identifying and eliminating non-value-added activities, streamlining processes, and maximizing the use of resources. By continuously analyzing workflows and removing unnecessary steps, organizations can reduce waste in terms of time, materials, and effort.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Flexibility and Scalability',
            description:
                'Designing layouts that can adapt to future changes and growth is essential for long-term operational flexibility. By creating modular and scalable workspaces, organizations can easily reconfigure layouts to accommodate new processes, equipment, or increased production demands. This approach involves planning for future expansion, incorporating flexible infrastructure, and ensuring that workstations, equipmen.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Feedback and Continuous Improvement',
            description:
                'Collecting feedback from employees and supervisors is vital for identifying areas for improvement and making necessary adjustments. By actively seeking input from those directly involved in day-to-day operations, organizations can gain valuable insights into inefficiencies, challenges, and opportunities for enhancement. This feedback loop fosters a culture of continuous improvement, where employees feel empowered to contribute to positive changes. ',
            img: "assets/images/NoImage.png"
        },
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
            <div className="max-w-8xl mx-auto px-4">
                <CapabilitiesMainCard
                    details1={{
                        title: 'Material Flow',
                        des: 'When designing a new plant layout in the garment and home textile industry, several factors should be considered regarding material flow. These considerations aim to optimize efficiency, minimize bottlenecks, and enhance productivity. Key aspects include.',
                        img: '/assets/images/365.png',
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
