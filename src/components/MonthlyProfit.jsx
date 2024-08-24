import React, { useState } from 'react';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function MonthlyProfit() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Track Monthly Income and Profitability',
            description:
                'Identify trends and areas for improvement by analyzing monthly financial statements to spot patterns in income and expenses. Look for fluctuations or anomalies in profitability, track recurring costs, and assess performance against goals. Use this information to pinpoint areas where adjustments can enhance efficiency, reduce costs, or increase revenue, guiding strategic decisions for overall business growth.',
            img: 'assets/images/NoImage.png', // Placeholder, replace with actual image path
        },
        {
            title: 'Identify Trends and Improve',
            description:
                "Equip yourself with the knowledge and skills to handle objections and close deals by understanding your product or service's unique selling proposition (USP) and competitive differentiation. Strengthen sales relationships through effective objection handling and negotiation, while honing your relationship-selling techniques by focusing on body language and buyer psychology. Update your selling strategy with a refined question funnel to guide the sales process more effectively.",
            img: 'assets/images/NoImage.png', // Placeholder, replace with actual image path
        },
        {
            title: 'Accurately Categorize Revenues and Expenses',
            description:
                'Accurately categorize revenues and expenses to ensure precise financial tracking and reporting. Organize revenues by source, such as product sales, services, or other income, and classify expenses into relevant categories like operating costs, salaries, utilities, and marketing. This systematic approach helps in analyzing financial performance, making informed decisions, and maintaining clear and transparent financial records.',
            img: 'assets/images/NoImage.png', // Placeholder, replace with actual image path
        },
        {
            title: 'Compare Results to Budget and Past Months',
            description:
                'Compare monthly results against the budget and previous months to evaluate financial performance. Analyze variances between actual figures and budgeted amounts to identify discrepancies and assess whether expenditures are within planned limits. Additionally, compare current results with those from previous months to detect trends, measure progress, and understand seasonal fluctuations, helping to make informed adjustments and improve financial management.',
            img: 'assets/images/NoImage.png', // Placeholder, replace with actual image path
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
                setVisibleCards((prevCount) => prevCount + 1);
            }
            if (visibleCards === services.length - 1) {
                setIsShowingMore(false);
            }
        } else {
            if (visibleCards > 1) {
                setVisibleCards((prevCount) => prevCount - 1);
            }
            if (visibleCards === 2) {
                setIsShowingMore(true);
            }
        }
    };
    return (
        <>
            {/* <AboutNavbar />
    <Capabilitiesbanner title={"ART of LEADING & MANAGEMENT Program"} des={"Conducting yearly evaluations to assess employee performance, set goals, and guide professional development."}/> */}
            <div className="max-w-8xl mx-auto px-4">
                <CapabilitiesMainCard
                    details1={{
                        title: 'Financial performance and cash flow management program',
                        des: 'Effective financial performance and cash flow management are critical for business success. This program focuses on seven key areas to help you understand, manage, and optimise your financial operations. ',
                        img: '/assets/images/396.png',
                    }}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Monthly Profit & Loss (P&L) Statement',
                        des: "A monthly Profit & Loss (P&L) statement provides a comprehensive snapshot of a company's financial performance over a single month. It details revenue, subtracts the cost of goods sold (COGS) to determine gross profit, and then accounts for operating expenses to calculate operating income. It also includes other income and expenses, such as interest, to determine net profit before taxes, and subtracts taxes to arrive at net profit after taxes. ",
                        img: '/assets/images/NoImage.png',
                    }}
                />
            </div>
            <div className="w-7xl mx-auto px-4 py-8">
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
                            {isShowingMore ? 'Show More' : 'Show Less'}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
