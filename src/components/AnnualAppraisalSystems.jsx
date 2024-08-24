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
export default function AnnualAppraisalSystems() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Defining Clear Evaluation Criteria',
            description:
                'Establishing specific KPIs (Key Performance Indicators) and KRAs (Key Result Areas) involves defining clear, measurable metrics and responsibilities that align with business goals. KPIs should be quantifiable and track critical aspects of performance, such as sales figures or customer satisfaction. KRAs should outline the essential tasks and outcomes for each role, focusing on areas that significantly impact organizational success.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Designing a Structured Appraisal Process',
            description:
                'Creating a comprehensive appraisal process involves structuring a system that includes goal setting, performance reviews, and feedback sessions. Start by setting clear, measurable goals aligned with organizational objectives for each employee. Performance reviews should be conducted periodically to assess progress against these goals, using standardized criteria for consistency.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Training and Support',
            description:
                'Providing training and ongoing support involves offering comprehensive education and resources to ensure the consistent and effective implementation of the appraisal system. This includes training sessions for managers and employees on how to use the system, conduct appraisals, and provide constructive feedback. Ongoing support might include regular workshops, access to user guides, and a helpdesk for troubleshooting.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Promoting Open Communication',
            description:
                'Encouraging open communication involves fostering an environment where employees feel comfortable sharing ideas, feedback, and concerns. This can be achieved through regular meetings, feedback sessions, and open-door policies. By actively listening to employee input and addressing their suggestions or issues, you create opportunities for continuous improvement and strengthen employee engagement.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Creating Performance Improvement Plans',
            description:
                'Assisting in the development of performance improvement plans involves identifying specific areas where employees need to enhance their skills or address performance gaps. This includes collaborating with employees and managers to set clear, actionable goals and outlining steps for achieving these goals. The plan might include targeted training, mentorship, or resources to support development.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Integrating with Incentives and Rewards',
            description:
                'Aligning the appraisal system with incentives, rewards, and talent management strategies involves integrating performance evaluations with broader organizational goals for motivation and retention. This includes ensuring that appraisal outcomes are directly linked to incentive structures, such as bonuses or promotions, and reflecting talent management priorities like career development and succession planning.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Regular Review and Refinement',
            description:
                'Conducting regular reviews and refinements involves systematically evaluating the appraisal system to ensure its ongoing effectiveness and relevance. This includes analyzing feedback from users, assessing the alignment of the system with current organizational goals, and reviewing performance data.',
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
            {/* <Capabilitiesbanner title={"Annual Appraisal Systems"} des={"Conducting yearly evaluations to assess employee performance, set goals, and guide professional development."} /> */}
            <div className="max-w-8xl mx-auto px-4">
                <CapabilitiesMainCard
                    details1={{
                        title: 'Annual Appraisal Systems',
                        des: 'Madasky Consulting can assist clients in developing a customized Annual Appraisal System that aligns with their organizational goals and culture. Our services include:',
                        img: '/assets/images/383.png',
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
