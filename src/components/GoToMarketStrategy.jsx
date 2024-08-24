import React, { useState } from 'react'
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function GoToMarketStrategy() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Product Understanding',
            description:
                "Gain a solid understanding of your product by exploring its features, benefits, and unique selling points (USPs). This helps you communicate its value effectively. Identify target customer segments and their specific needs to tailor your approach and meet those needs successfully.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Market Research',
            description:
                "Conduct in-depth market research to gain insights into the market landscape, customer preferences, and competition. This helps you identify trends and opportunities, positioning your product or service for success in a competitive environment.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Positioning',
            description:
                "Define how your product fits into the market and what sets it apart from competitors. Develop a strong value proposition and positioning statement to highlight your product’s unique benefits and ensure it stands out.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Pricing Strategy',
            description:
                "Create a pricing strategy that reflects the product’s value and meets market demand. Ensure the pricing model attracts customers while supporting business goals, maintaining profitability, and contributing to long-term success.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Distribution Channels',
            description:
                "Select effective distribution channels to reach your target customers and ensure broad market coverage. Optimize logistics for efficiency and scalability, and identify potential partners like retailers and online platforms to expand your product's reach.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Marketing and Promotions',
            description:
                "Develop marketing and promotional strategies to build awareness and drive demand. Use various channels, including social media, email campaigns, content marketing, and advertising, to engage potential customers and generate interest.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Sales Strategy',
            description:
                "Formulate a sales strategy that complements your marketing efforts and targets key customer segments. Outline goals, tactics, and timelines in a detailed sales plan. Equip your sales team with tools and training to effectively convert leads and achieve sales objectives.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Customer Service',
            description:
                "Provide exceptional customer service to boost satisfaction and retention. Establish a feedback loop to gather insights, improve the product, and enhance the customer experience. Address issues promptly to refine offerings and better meet customer needs.",
            img: "assets/images/NoImage.png"
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
                    title: 'Go-to-Market Strategy',
                    des: "This program covers all essential aspects to ensure your product reaches the right audience and achieves its market potential. Below are the key components of the GTM strategy. ",
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
