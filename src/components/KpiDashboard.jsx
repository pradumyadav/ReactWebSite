import React, { useState } from 'react';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function KpiDashboard() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Visualize Key Metrics',
            description:
                'Use charts, graphs, and tables to visually present essential financial and operational metrics. This visual representation helps in quickly understanding and analyzing performance data at a glance.',
            img: 'assets/images/NoImage.png',
        },
        {
            title: 'Create KPI Dashboard',
            description:
                'Create a comprehensive KPI dashboard that consolidates crucial metrics like revenue, expenses, profit margins, cash flow, and breakeven points. This dashboard serves as a central tool for tracking and managing your business’s financial health and operational efficiency.',
            img: 'assets/images/NoImage.png',
        },
        {
            title: 'Update Dashboard Regularly',
            description:
                'Ensure the KPI dashboard is updated regularly to include the most recent data. This practice provides an accurate and current view of performance, enabling timely decision-making and adjustments.',
            img: 'assets/images/NoImage.png',
        },
        {
            title: 'Identify Issues and Opportunities',
            description:
                'Analyze the data presented on the dashboard to spot potential issues and areas for improvement. Utilize these insights to address problems, capitalize on opportunities, and optimize overall business performance.',
            img: 'assets/images/NoImage.png',
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
            <div className="max-w-8xl mx-auto px-4">
                <CapabilitiesMainCard
                    details1={{
                        title: 'KPI Dashboard',
                        des: 'KPI Dashboard is a visual tool that displays key performance indicators (KPIs) in a consolidated format to track and evaluate the performance of your business. It provides real-time insights into critical metrics such as sales performance, revenue growth, profit margins, and operational efficiency. ',
                        img: '/assets/images/386.png',
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
