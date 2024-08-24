import React, { useState } from 'react'
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';
export default function ReceivablesPayablesSystem() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Ensure Timely Collection and Management',
            description:
                'To maintain financial stability, focus on collecting receivables promptly and managing payables efficiently. Regularly review accounts receivable to ensure payments are received on time and manage payables to prevent late fees and maintain good relationships with suppliers.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Optimize Cash Flow Balancing Payments',
            description:
                'Effectively balance incoming payments from customers with outgoing payments to vendors to optimize cash flow. Proper cash flow management helps ensure that your business can meet its financial obligations while maintaining operational efficiency and planning for growth.',
            img: 'assets/images/NoImage.png'
        },
        {
            title: 'Implement Receivables Management System',
            description:
                'Deploy an accounts receivable management system to streamline the tracking of invoices and automate follow-ups on overdue accounts. This system helps maintain accurate records, improves collection efficiency, and reduces the risk of late or missed payments.',
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
                title: 'Receivables & Payables System',
                des: "A Receivables & Payables System involves efficiently managing the money owed to and by your business. This includes tracking customer invoices to ensure timely payment and managing bills to avoid late fees and take advantage of discounts. Automating these processes with accounting software enhances accuracy and efficiency. ",
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
                            {isShowingMore ? "Show More" : "Show Less"}
                        </button>
                    </div>
                )}

    </div>
  
</>
  )
}
