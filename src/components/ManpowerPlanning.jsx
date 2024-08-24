import React, { useState } from 'react'
import AboutNavbar from './AboutNavbar';
import Capabilitiesbanner from './Capabilitiesbanner';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceCard from './ServiceCard';
import Opportunity from './Opportunity';
import HelpYou from './HelpYou';
import Footer from './Footer';
import ServiceTabs from './ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';

export default function ManpowerPlanning() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Analyzing Organizational Objectives',
            description:
                'Aligning workforce planning with a business’s strategic goals is crucial for achieving long-term success and sustainability. This involves ensuring that the workforce strategy directly supports the company’s overarching objectives, such as growth targets, market expansion, or innovation initiatives.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Assessing the Current Workforce',
            description:
                "Evaluating the skills, capabilities, and demographics of the existing workforce is a critical step in effective manpower planning. This assessment involves a thorough analysis of employees' current skill sets, competencies, and experience levels to understand how well they align with the organization’s needs.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Forecasting Future Workforce Requirements',
            description:
                "Predicting future staffing needs based on business objectives and market trends is a proactive approach essential for maintaining organizational agility and competitiveness. This process involves analyzing current business goals, such as expansion plans, new product launches, or market entry strategies, and then forecasting the associated workforce requirements.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Identifying Gaps',
            description:
                'Determining the gaps between the current workforce and future requirements involves a detailed analysis to identify discrepancies between existing skills and the skills needed to achieve future business objectives. This process starts with a comprehensive assessment of current workforce capabilities, including skills, experience, and performance levels.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Developing Recruitment and Retention Strategies',
            description:
                "Attracting and retaining the right talent to fill identified gaps is crucial for ensuring that an organization can meet its strategic objectives and maintain a competitive edge. To attract the right talent, organizations should implement targeted recruitment strategies that highlight the company's strengths, culture, and opportunities for growth.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Training and Development',
            description:
                "Enhancing employee skills and capabilities through targeted training programs is essential for fostering growth and maintaining organizational competitiveness. By identifying specific skills gaps and development needs based on performance assessments and future requirements.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Succession Planning',
            description:
                "Preparing for future leadership needs by identifying and developing potential leaders is crucial for ensuring the long-term success and stability of an organization. This process begins with identifying high-potential employees who demonstrate leadership qualities, such as strong decision-making.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Monitoring and Reviewing',
            description:
                "Continuously evaluating the effectiveness of workforce planning strategies and making necessary adjustments is vital for maintaining alignment with organizational goals and adapting to changing conditions. This process involves regularly reviewing key performance indicators, such as employee productivity.",
            img: "assets/images/NoImage.png"
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
    const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/193.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/194.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/195.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/196.jpg',
            link: '#',
        },
    ];
    const opportunityItems2 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/197.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/198.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/199.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/200.jpg',
            link: '#',
        },
    ];
  return (
    <>
  
    {/* <Capabilitiesbanner title={"Manpower Planning"} des={"Strategically aligning workforce needs with business goals to ensure optimal staffing and productivity."}/> */}
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: 'Manpower Planning',
                des: "Manpower planning, also known as workforce planning or human resource planning, ensures that a manufacturing organization has the right number of skilled employees in the right positions at the right time. Key steps involved in the manpower planning process includeManpower planning, also referred to as workforce or human resource planning.  ",
                img: '/assets/images/364.png',
            }}
        />
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
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
    </div> */}
    {/* <HelpYou/>
    <Footer/> */}
</>
  )
}
