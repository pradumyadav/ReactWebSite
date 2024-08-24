import { useState } from 'react';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function StepsGrowth() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Lead Generation',
            description:
                "Attracting potential buyers is essential for building a strong sales pipeline. Generating leads involves capturing interest and engaging prospects, but it's important to remember that not every response will convert into a sale.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Conversion Rates',
            description:
                "Conversion rate is a key metric that measures the effectiveness of your sales process in turning potential customers into actual buyers. Improving this rate through optimized sales techniques can significantly boost your overall sales performance.",
            img: "assets/images/393.png"
        },
        {
            title: 'Average Sale Value',
            description:
                'Increasing the average sale value involves strategies to encourage customers to spend more per transaction. Techniques like upselling, cross-selling, and offering bundled deals can help achieve this goal.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Number of Transactions',
            description:
                "The number of transactions tracks how frequently customers make purchases. By building strong relationships and continuously engaging with customers, you can increase the frequency of their transactions.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Profit Margins',
            description:
                "Profit margins reflect the percentage of profit from each sale. Enhancing your profit margins involves optimizing operations, adjusting pricing strategies, and reducing costs to improve overall profitability.",
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
                        title: '5 STEPS of Growth',
                        des: "The Five Ways of Growth approach focuses on five key profit-generating areas: increasing customer acquisition, boosting conversion rates, maximizing transaction value, improving purchase frequency, and enhancing profit margins. By strategically targeting these areas, businesses can drive significant profit growth and optimize their overall performance. ",
                        img: '/assets/images/382.png',
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
