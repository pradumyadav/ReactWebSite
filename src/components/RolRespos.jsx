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
export default function RolRespos() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Job Analysis',
            description:
                "Conducting in-depth job analyses involves examining each position within an organization to understand specific tasks, responsibilities, skills, and qualifications required. This includes gathering detailed information about job functions, required competencies, and performance expectations to develop accurate job descriptions and align hiring practices.",
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Job Descriptions',
            description:
                'Developing clear and comprehensive job descriptions involves creating documents that outline the duties, responsibilities, skills, qualifications, and performance criteria associated with each role. This helps ensure that roles are well-defined and expectations are clear.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Structure Design',
            description:
                'Designing effective organizational structures that promote efficiency, clear reporting lines, and streamlined workflows.',
            img: "assets/images/387.png"
        },
        {
            title: 'Role Alignment',
            description:
                'Ensuring that roles are aligned with the organizational structure involves matching individual responsibilities with defined hierarchies and workflows. This alignment helps clarify reporting lines, facilitates smooth operations, and enhances effective communication across teams.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Training Needs Assessment',
            description:
                'Identifying training needs involves assessing the gap between current employee skills and those required for their roles. This includes gap analysis and employee feedback to pinpoint areas for development and improve overall proficiency.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Program Design',
            description:
                'Designing and implementing tailored training programs involves creating educational initiatives that address specific skills and knowledge gaps. This includes developing course content, selecting delivery methods, and setting clear learning objectives.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Learning',
            description:
                'Establishing frameworks for continuous learning involves creating programs and processes that support ongoing education and skill enhancement. This includes regular training sessions, access to professional resources, and encouragement to participate in industry events.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'System Design',
            description:
                'Creating effective performance management systems involves establishing structured approaches that include goal setting, performance appraisals, and feedback mechanisms. Goals should be clear, measurable, and aligned with organizational priorities.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Evaluation',
            description:
                'Implementing regular performance evaluations involves assessing employees’ progress and overall contribution to organizational success. This includes setting performance criteria, conducting reviews, and providing feedback to identify achievements and areas for improvement.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Talent Identification',
            description:
                'Identifying high-potential employees involves assessing individuals with exceptional skills and leadership potential. Developing succession plans helps prepare these employees for future leadership roles and ensures organizational continuity.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Development Plans',
            description:
                'Developing career development plans involves creating pathways for employee advancement. These plans include identifying career goals, providing tailored training opportunities, and setting milestones for progression within the organization.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Change Management',
            description:
                'Offering support during organizational changes involves providing guidance and resources to help employees navigate transitions. This includes clear communication about changes, training for new roles, and emotional support through counseling or coaching.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Employee Engagement',
            description:
                'Maintaining employee engagement during changes involves addressing concerns and fostering a positive environment. Strategies include transparent communication, involving employees in the change process, and providing regular updates to keep them informed.',
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
            {/* <AboutNavbar />
    <Capabilitiesbanner title={"ROLES & RESPONSIBILITIES "} des={"Defining individual duties and expectations to ensure clarity and accountability within a team or organization."}/> */}
            <div className="max-w-8xl mx-auto px-4">

                <CapabilitiesMainCard
                    details1={{
                        title: 'ROLES AND RESPONSIBILITIES',
                        des: "Madasky Consulting offers specialized services to assist clients in defining clear job descriptions, roles, and responsibilities. By conducting thorough job analyses and developing concise job descriptions, we ensure that each role is well-defined and aligned with the organization's goals. Our comprehensive approach includes the following .",
                        img: '/assets/images/389.png',
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
    </div>
    <HelpYou/>
    <Footer/> */}
        </>
    )
}
