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
export default function Insentives() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Customized Compensation Plans',
            description:
                'Analyzing company objectives, industry benchmarks, and best practices involves examining organizational goals and comparing them with industry standards. This helps design tailored incentive schemes that align with company objectives and motivate employees effectively. Understanding industry drivers and integrating best practices ensures the incentive schemes are competitive, fair, and strategically aligned.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Balanced and Competitive Incentives',
            description:
                'Creating balanced and competitive incentive structures involves evaluating job roles, performance metrics, and market trends. By aligning incentives with key performance indicators and industry standards, you ensure that rewards reflect contributions and drive success, making the incentive schemes attractive and competitive.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Implementation Guidance',
            description:
                'Providing comprehensive guidance on implementing incentive programs involves detailed support for smooth rollout and adoption. This includes creating clear implementation plans, effectively communicating program details to employees, and offering training to managers and staff.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Regular Review and Adjustment',
            description:
                'Conducting regular reviews of incentive programs involves evaluating their effectiveness to ensure they remain relevant and motivating. This includes gathering employee feedback, analyzing program performance data, and ensuring alignment with organizational goals and industry trends.',
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
        <Capabilitiesbanner title={"Incentives / Variable Pay Structuring"} des={"Designing flexible compensation plans to reward performance and motivate employees based on achievement and results."}/> */}
        <div className="max-w-8xl mx-auto px-4">
           
            <CapabilitiesMainCard
                details1={{
                    title: 'Incentives / Variable Pay Structuring',
                    des: "Madasky Consulting specializes in designing effective incentive and variable pay structures that motivate employees and align their performance with organizational goals. Our approach includes:",
                    img: '/assets/images/398.png',
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
