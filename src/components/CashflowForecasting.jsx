import React, { useState } from 'react'
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function CashflowForecasting() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Predict Cash Inflows and Outflows',
            description:
                'Forecasting cash inflows and outflows helps ensure that your business has adequate liquidity to cover its short-term obligations. By estimating when cash will be received and spent, you can maintain a healthy cash balance and avoid disruptions in operations.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Plan for Future Cash Needs',
            description:
                "By projecting future cash needs, you can anticipate and prepare for any potential shortfalls. This proactive planning allows you to arrange financing or adjust spending strategies in advance, ensuring you have the resources needed to meet your financial commitments.",
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Develop 12-Month Cashflow Forecast',
            description:
                'A rolling 12-month cashflow forecast provides a continuous view of your cash position over the next year. Regularly updating this forecast helps you stay ahead of cash flow trends, adjust plans as needed, and make timely decisions based on the most current financial data.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Identify and Address Cash Gaps',
            description:
                "Identifying potential cash gaps in advance allows you to address them before they become critical issues. By analyzing forecasted cash flows, you can develop strategies to bridge these gaps, such as securing additional financing, adjusting payment schedules, or cutting non-essential expenses.",
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
    {/* <AboutNavbar />
    <Capabilitiesbanner title={"ART of LEADING & MANAGEMENT Program"} des={"Conducting yearly evaluations to assess employee performance, set goals, and guide professional development."}/> */}
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: 'Cashflow Forecasting',
                des: "Cashflow forecasting involves predicting future cash inflows and outflows to ensure you have enough liquidity for upcoming expenses and obligations. By analyzing trends and anticipating changes, you can plan for potential cash shortfalls or surpluses, making informed decisions to maintain financial stability and support growth. ",
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
