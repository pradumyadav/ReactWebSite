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
export default function Impact() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: '20% Efficiency Increase',
            description:
                'Achieve a significant boost in operational efficiency by implementing digital tools and automation. These technologies streamline processes, reduce manual tasks, and enhance accuracy, leading to faster order fulfillment and improved inventory management. Automation minimizes errors and delays, while real-time data offers actionable insights for better decision-making.',
            img: "assets/images/NoImage.png"
        },
        {
            title: '25% Operating Cost Reduction',
            description:
                "Reduce overall operating costs with the adoption of digital tools and automation. Automating routine tasks like inventory management and order processing cuts labor costs and minimizes errors, lowering expenses related to manual interventions and rework.",
            img: "assets/images/NoImage.png"
        },
        {
            title: '35% Revenue Increase',
            description:
                "Experience a substantial revenue increase from adopting digital tools and automation. Improved efficiency and accuracy streamline processes, lead to faster order fulfillment, and enhance customer satisfaction. These advancements enable handling a higher volume of orders with precision, attracting more customers and boosting sales.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Unbeatable Product Quality',
            description:
                'Achieve exceptional product quality through precise control and monitoring. Advanced technologies and systems ensure high standards at every production stage. Real-time monitoring tools like sensors and automated quality control systems provide continuous oversight, identifying and addressing deviations to prevent defects and ensure consistency.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Traceability at Operation Level',
            description:
                "Ensure complete traceability of operations by implementing systems that track and record each process step, from raw materials to final products. Technologies like barcode scanning, RFID tagging, and digital records provide clear documentation, enhancing accountability and allowing for easy issue identification and compliance verification.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Entire Data at Fingertips',
            description:
                "Access crucial data instantly by integrating centralized digital systems such as real-time dashboards, cloud-based databases, and advanced data management tools. These systems consolidate information from various sources, offering immediate visibility into key metrics like inventory levels, order statuses, and performance indicators.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Go Completely Paperless',
            description:
                "Transition to a fully digital, paperless environment by adopting electronic document management systems, digital forms, and automated workflows. Digitizing documents and records reduces paper reliance, streamlines processes, and improves efficiency.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Complete Factory Visibility',
            description:
                "Gain full visibility into factory operations using technologies like IoT sensors, real-time monitoring systems, and integrated data analytics. These tools provide comprehensive insights into production processes, machine performance, workflow efficiency, and inventory levels, allowing for real-time monitoring and informed decision-making.",
            img: "assets/images/NoImage.png"
        }
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
    <Capabilitiesbanner title={"Impact"} des={"Delivering measurable results that drive growth, efficiency, and long-term success for your business."}/> */}
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: 'Impact',
                des: "Effectively managing digital tools and processes in a warehouse significantly boosts efficiency, accuracy, and cost savings. Automation and digital solutions streamline operations, reduce manual errors, and optimize workflows, leading to faster order processing and better inventory management. These improvements result in substantial cost savings, enhanced decision-making through real-time data .  ",
                img: '/assets/images/NoImage.png',
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
