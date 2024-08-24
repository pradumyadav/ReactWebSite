import { useState } from 'react';
import CapabilitiesCard from './CapabilitiesCard';
import CapabilitiesMainCard from './CapabilitiesMainCard';


export default function PlantLayout() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);

    const services = [
        {
            title: 'Workflow Optimization',
            description:
                'Streamlining processes is essential for enhancing efficiency and productivity in any organization. By simplifying workflows, eliminating redundancies, and automating repetitive tasks, teams can focus on high-value activities that drive results This approach not only reduces time and resource wastage but also fosters .',
                img:"assets/images/NoImage.png"
        },
        {
            title: 'Technology Integration',
            description:
                'Incorporating advanced technologies is key to boosting performance and staying ahead in today’s fast-paced environment. By integrating tools like artificial intelligence, machine learning, and automation, businesses can optimize operations, improve decision-making, and accelerate innovation.',
                 img:"assets/images/NoImage.png"
        },
        {
            title: 'Automation',
            description:
                'Implementing automation solutions is a powerful strategy for increasing efficiency and reducing labor costs. By automating routine and repetitive tasks, businesses can streamline operations, minimize human error, and free up employees to focus on more complex, value-added activities. This not only leads to faster. ',
                 img:"assets/images/NoImage.png"
        },
        {
            title: 'Best Practices Guidance',
            description:
                'Providing guidance on industry best practices and safety regulations is crucial for maintaining a safe and compliant workplace. By offering clear and up-to-date information on the latest standards, organizations can ensure that their operations meet legal requirements and reflect the highest levels of professionalism. ',
                 img:"assets/images/NoImage.png"
        },
        {
            title: 'Emerging Trends',
            description:
                'Keeping clients informed about the latest industry trends and innovations is vital for building strong, long-lasting relationships and ensuring their success. By regularly sharing insights on emerging technologies, market shifts, and new best practices, businesses can help clients stay ahead of the curve and make informed decisions.  ',
                 img:"assets/images/NoImage.png"
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
                        title: 'Plant Layout',
                        des: "Plant layout involves the strategic arrangement of machinery, equipment, and resources within a manufacturing facility, such as a home textile plant, to optimize production efficiency, reduce operational costs, and ensure worker safety. Key considerations for plant layout in the garment and home textile manufacturing industry include:",
                        img: '/assets/images/372.png',
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
    );
}
