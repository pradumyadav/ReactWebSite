import React, { useState } from 'react'
import AboutNavbar from './AboutNavbar';
import Capabilitiesbanner from './Capabilitiesbanner';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceCard from './ServiceCard';
import Opportunity from './Opportunity';
import HelpYou from './HelpYou';
import Footer from './Footer';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';

export default function WarehouseSolutions() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Facility Design',
            description:
                'Designing warehouses for efficient storage and handling involves optimizing space, layout, and processes to ensure quick access, easy movement of goods, and minimal waste. This includes strategic placement of storage racks, clear pathways for forklifts and workers, effective inventory management systems, and automation where possible. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Storage Systems',
            description:
                "Implementing suitable storage solutions like pallet racking systems involves selecting and installing racks that best fit the warehouse's needs based on the types of goods stored, their weight, and how often they need to be accessed. Pallet racking systems optimize vertical space, allowing for higher storage density while maintaining easy access to individual pallets.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Material Handling Equipment',
            description:
                "Using advanced equipment for efficient material handling involves integrating modern tools and machinery like automated guided vehicles (AGVs), conveyor systems, and robotic arms into warehouse operations. These technologies enhance speed, precision, and safety in moving goods throughout the warehouse. Advanced equipment reduces manual labor, minimizes errors, and ensures a smoother, more efficient workflow, especially in high-volume or complex storage environments.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Warehouse Management System',
            description:
                'Integrating technology for effective warehouse management involves implementing systems like Warehouse Management Systems (WMS), barcode scanning, and RFID tracking. These technologies streamline inventory control, order processing, and data accuracy by providing real-time visibility into stock levels, locations, and movements. A WMS can automate key processes, optimize picking routes, and improve inventory accuracy, reducing errors and enhancing efficiency. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Labor Management',
            description:
                "Efficiently managing warehouse staff to optimize operations involves strategic planning, clear communication, and proper training. Assigning roles based on skills and experience, setting clear performance expectations, and using scheduling tools to ensure adequate coverage during peak times are key practices.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Safety and Security',
            description:
                "Ensuring a safe and secure working environment in a warehouse involves implementing strict safety protocols, regular training, and proper equipment use. This includes clear labeling of hazardous areas, ensuring all machinery is well-maintained, and providing personal protective equipment (PPE) to workers. Regular safety audits and drills help identify potential risks and prepare staff for emergencies ",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Sustainability',
            description:
                "Incorporating eco-friendly practices in warehousing operations involves adopting sustainable strategies to reduce environmental impact. This can include using energy-efficient lighting and HVAC systems, implementing waste reduction and recycling programs, and optimizing transportation to lower carbon emissions. Additionally, warehouses can invest in renewable energy sources, such as solar panels, and utilize eco-friendly materials for packaging and storage. ",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Scalability and Flexibility',
            description:
                "Designing warehouses that can adapt to future needs involves creating flexible and scalable spaces that can accommodate changes in technology, inventory, and business growth. This includes using modular racking systems, adjustable layouts, and multi-functional areas that can be easily reconfigured as demands evolve. Incorporating advanced technology infrastructure, like IoT sensors and automation-ready designs, allows for seamless integration of new systems.",
            img: "assets/images/NoImage.png"
        },
    ];
        const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/193.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/194.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/195.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/196.jpg',
            link: '#',
        },
    ];
    const opportunityItems2 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/197.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/198.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/199.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/200.jpg',
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
        <Capabilitiesbanner title={"Warehouse Solutions"} des={"Designing and implementing strategies to optimize storage, inventory management, and logistics for efficient warehouse operations."}/> */}
        <div className="max-w-8xl mx-auto px-4">
           
            <CapabilitiesMainCard
                details1={{
                    title: 'Warehouse Solutions',
                    des: "Warehousing solutions are essential for effective inventory management, storage, and distribution in various industries. They involve the strategic utilization of space, technology, and labor to optimize the storage and handling of goods. Key elements of warehousing solutions include.",
                    img: '/assets/images/381.png',
                }}
            />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-9 mt-6">
                HOW WE HELP CLIENTS
            </h2>
            {/* <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div> */}
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
        {/* <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl from-neutral-500 text-gray-800  font-bold mb-4">
                Closing the opportunity gap
            </h1>
            <p className="text-xl mb-8 text-gray-600 ">
                Accelerating sustainable and inclusive growth is vital for
                people and economies to prosper. This can only happen if
                every person, regardless of their background or level of
                education, has an opportunity to thrive in the economy and
                workforce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {opportunityItems1.map((item, index) => (
                    <Opportunity {...item} key={index} />
                ))}
            </div>
        </div>{' '}
        <div className=" bg-gray-100  rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl from-neutral-500 text-gray-800 font-bold mb-4">
                Partnering for positive impact
            </h1>
            <p className="text-xl mb-8 text-gray-600 ">
                We are proud to partner with our clients to reach their
                biggest opportunities and create positive, enduring change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {opportunityItems2.map((item, index) => (
                    <Opportunity {...item} key={index} />
                ))}
            </div>
        </div>
        <HelpYou/>
        <Footer/> */}
    </>
      )
}
