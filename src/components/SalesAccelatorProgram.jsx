import { useState } from 'react';
import CapabilitiesCard from './CapabilitiesCard';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';

export default function SalesAccelatorProgram() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Stage One: Ignition',
            description:
                'Enhance your sales effectiveness by mastering the art of communication, building strong rapport, and confidently overcoming objections. Develop a professional sales mindset, understand various sales dynamics, and adapt to different scenarios. ',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Stage Two: Empower',
            description:
                "Equip yourself with the knowledge and skills to handle objections and close deals by understanding your product or service's unique selling proposition (USP) and competitive differentiation. Strengthen sales relationships through effective objection handling and negotiation, while honing your relationship-selling techniques by focusing on body language and buyer psychology. Update your selling strategy with a refined question funnel to guide the sales process more effectively.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Stage Three: Achieve',
            description:
                'Unlock your full potential with advanced sales techniques and strategies by effectively testing, measuring, and utilizing sales KPIs and tools. Innovate in customer service to enhance customer satisfaction, and master question techniques and enrollment to provide tailored solutions. Maximize your outcomes by using scripts and targeting the right audiences with precision.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Why Sales Mastery Matters',
            description:
                "Sales mastery impacts a company’s bottom line, builds brand reputation, fosters customer loyalty, and creates growth opportunities. Mastering sales techniques leads to better job satisfaction and career advancement. This program offers you an unparalleled understanding of modern marketing principles, strategic planning acumen, invaluable market insights, and the ability to implement and monitor your marketing activities with precision.",
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
            <div className="max-w-8xl mx-auto px-4">
                <CapabilitiesMainCard
                    details1={{
                        title: 'Sales Accelerator Program',
                        des: "The 12 week sales masterclassan intensive program will elevate your performance of sales through a structured and transformative journey that is divided into three stages ignition empowers and achieve each crafted to ensure you become a proficient and successful salesperson . ",
                        img: '/assets/images/367.png',
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
