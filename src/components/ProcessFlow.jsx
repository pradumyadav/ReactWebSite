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

export default function ProcessFlow() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Defining Steps',
            description:
                'Clearly outlining each step in the production process is crucial for ensuring smooth and efficient operations. This involves planning and design, sourcing materials, setting up production, executing manufacturing tasks, implementing quality control, packaging and storing products, and managing distribution.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Mapping Out Flow',
            description:
                'Creating a visual representation of the process flow is a powerful tool for identifying potential bottlenecks and optimizing operations. By mapping out each step of the process using flowcharts or diagrams, organizations can gain a clear, comprehensive view of how tasks are connected and where delays or inefficiencies might occur.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Implementing Best Practices',
            description:
                'Adopting industry best practices is crucial for enhancing efficiency and reducing waste in any organization. These practices often include lean manufacturing principles, such as eliminating non-value-added activities, optimizing resource utilization, and improving workflow processes. Implementing standardized procedures.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Improvement',
            description:
                'Regularly reviewing and improving the process flow is essential for maintaining efficiency and product quality. By consistently assessing each stage of the process, organizations can identify areas for enhancement and address any emerging inefficiencies or quality issues. This ongoing evaluation involves analyzing performance metrics, gathering feedback',
            img: "assets/images/NoImage.png"
        }
    ];
    
    const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/208.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/209.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/210.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/211.jpg',
            link: '#',
        },
    ];
    const opportunityItems2 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/212.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/213.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/214.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/215.jpg',
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
            {/* <AboutNavbar /> */}
            {/* <Capabilitiesbanner title={"Process Flow"} des={"Streamlining operations by mapping and optimizing each step in a workflow for efficiency and clarity."}/> */}
            <div className="max-w-8xl mx-auto px-4">
               
                <CapabilitiesMainCard
                    details1={{
                        title: 'Process Flow',
                        des: 'Process flow in the manufacturing industry outlines the sequential stages of transforming raw materials into finished products. A well-organized process flow improves efficiency and minimizes waste. Key aspects of an optimized process flow include .',
                        img: '/assets/images/366.png',
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
            {/* <div className=" bg-gray-100  rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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