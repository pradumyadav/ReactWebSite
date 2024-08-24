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
export default function DreamToSuccess() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Goal Setting',
            description:
                "To achieve success, start by setting clear, specific goals. Define what success looks like for your business over the next year using the SMART criteria—Specific, Measurable, Achievable, Results-Oriented, and Time-Framed. This approach creates a focused path and a clear roadmap to guide your business toward its desired outcomes.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Destination',
            description:
                'Target your business destination precisely to make the most of the next year. Define where you want your business to go and ensure your goals are clear and attainable using the SMART test.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Step-by-Step Vision Creation',
            description:
                'Develop a compelling business vision through a step-by-step approach. Define your long-term vision, understand your core purpose, and identify your fundamental values. Craft a mission statement that aligns with your vision and values, ensuring each step forward is purposeful and aligned with your goals.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Business Plan',
            description:
                'Create a detailed and actionable business plan as a step-by-step guide to building and growing your business. This plan will outline the necessary steps to achieve your goals and ensure structured progress toward your objectives.',
            img: "assets/images/NoImage.png"
        },
        {
            title: '90-Day Plan',
            description:
                "Transition from your business plan to a '90 Day' plan by breaking down goals into manageable tasks over the next 13 weeks. Allocate each goal within the six steps of business growth, set timeframes, and detail specific tasks. This 90-day plan will serve as a roadmap, guiding your actions and keeping you on track to achieve your objectives.",
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
        <Capabilitiesbanner title={"Dream to Success"} des={"The secret to getting ahead is getting started with a clear plan  Knowing your destination from the beginning allows every step to lead you closer to your goals."}/> */}
        <div className="max-w-8xl mx-auto px-4">
        <CapabilitiesMainCard
                details1={{
                    title: 'general management & strategy',
                    // des: "The Dream to Success program is crafted to help you transition from envisioning your business goals to achieving them through strategic planning and consistent action. Drawing on the insights of strategic thought leaders, this program underscores the importance of beginning with a clear vision of your objectives",
                    img: '/assets/images/397.png',
                }}
            />
            <CapabilitiesMainCard
                details1={{
                    title: 'Dream to Success',
                    des: "The Dream to Success program is crafted to help you transition from envisioning your business goals to achieving them through strategic planning and consistent action. Drawing on the insights of strategic thought leaders, this program underscores the importance of beginning with a clear vision of your objectives",
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
