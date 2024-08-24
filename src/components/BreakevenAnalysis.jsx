import React, { useState } from 'react';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function BreakevenAnalysis() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Determine Sales Volume for Breakeven',
            description:
                'Identify the sales volume where your total revenues cover all costs, resulting in a breakeven point where no profit or loss is incurred. This helps in understanding the minimum performance required to avoid financial losses.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Establish Profitability Targets',
            description:
                'Set specific sales targets based on your breakeven analysis to ensure that revenue surpasses total costs and achieves profitability. This target guides your sales strategies and operational goals.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Calculate Breakeven Point',
            description:
                'Compute the breakeven point by analyzing fixed costs (e.g., rent, salaries) and variable costs (e.g., raw materials, production costs). This calculation reveals the sales volume needed to cover all expenses and begin generating profit.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Update Breakeven Analysis Regularly',
            description:
                'Regularly review and adjust your breakeven analysis to reflect changes in costs, pricing, or market conditions. This ensures that your breakeven calculations remain accurate and relevant for effective financial planning and decision-making.',
            img: 'assets/images/NoImage.png'
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
                        title: ' Breakeven Analysis',
                        des: " involves determining the point at which your business's revenues equal its costs, resulting in neither profit nor loss. This analysis helps identify the minimum sales volume needed to cover all fixed and variable costs. By calculating the breakeven point, you can assess the financial viability of your business, set realistic sales targets, and make informed pricing and cost management decisions",
                        img: '/assets/images/NoImage.png',
                    }}
                />
            </div>
            <div className="w-full mx-auto px-4 py-8">
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
    );
}
