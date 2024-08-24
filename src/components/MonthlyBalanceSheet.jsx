import React, { useState } from 'react'
import ServiceTabs from './ServiceTabs';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesCard from './CapabilitiesCard';

export default function MonthlyBalanceSheet() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Monitor assets, liabilities, and equity.',
            description:
                "Monitor assets, liabilities, and equity to maintain a clear understanding of your business's financial health. Track assets to assess resources available for operations and growth, evaluate liabilities to manage debt and financial obligations, and review equity to understand the ownership stake and financial stability. Regular monitoring helps in making informed financial decisions, ensuring liquidity, and maintaining a balanced and sustainable financial position.",
            img: "assets/images/NoImage.png" // Placeholder, replace with actual image path
        },
        {
            title: 'Financial Position Overview',
            description:
                "Provide a snapshot of your business's financial position by summarizing key financial metrics such as total assets, liabilities, and equity. Include recent figures for cash reserves, outstanding debts, and shareholder equity to offer a clear view of financial stability. This overview highlights the current state of your business’s resources and obligations, helping stakeholders quickly assess financial health and make informed decisions.",
            img: "assets/images/NoImage.png" // Placeholder, replace with actual image path
        },
        {
            title: 'Review Assets and Liabilities',
            description:
                "Review the composition of assets and liabilities to gain a comprehensive understanding of your business's financial structure. Assess assets by categorizing them into current (e.g., cash, accounts receivable) and non-current (e.g., property, equipment) to understand their liquidity and long-term value. Similarly, analyze liabilities by dividing them into current (e.g., accounts payable, short-term loans) and non-current (e.g., long-term debt) to evaluate repayment timelines and financial obligations. This analysis helps in identifying financial strengths, weaknesses, and areas requiring strategic adjustments.",
            img: "assets/images/NoImage.png" // Placeholder, replace with actual image path
        },
        {
            title: 'Align Balance Sheet with P&L Statement',
            description:
                "Ensure the balance sheet aligns with the P&L statement by verifying that all figures are consistent and accurately reflect your business's financial position and performance. Reconcile net income from the P&L statement with the retained earnings on the balance sheet. Confirm that assets, liabilities, and equity balances correspond with the revenues, expenses, and profits reported. This alignment ensures accuracy in financial reporting and provides a reliable snapshot of your business’s financial health.",
            img: "assets/images/NoImage.png" // Placeholder, replace with actual image path
        },
        {
            title: 'Monthly Balance Sheet (BS)',
            description:
                "Provide a snapshot of your business's financial position by summarizing key metrics from your financial statements. This includes the current balance of assets, liabilities, and equity, along with recent income and expense trends. Highlight profitability, cash flow, and any significant changes or anomalies in financial performance. This overview offers a concise view of your business’s financial health, enabling stakeholders to make informed decisions.",
            img: "assets/images/NoImage.png" // Placeholder, replace with actual image path
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
    <Capabilitiesbanner title={"ART of LEADING & MANAGEMENT Program"} des={"Conducting yearly evaluations to assess employee performance, set goals, and guide professional development."}/> */}
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: 'Monthly Balance Sheet (BS)',
                des: "A monthly balance sheet provides a snapshot of your business's financial position by summarizing assets, liabilities, and equity at a specific point in time. Monitor and review the composition of assets and liabilities to understand the liquidity, financial obligations, and overall stability.",
                img: '/assets/images/NoImage.png',
            }}
        />
    </div>
    <div className="w-7xl mx-auto px-4 py-8">
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
