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
export default function PerFormanceEv() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Defining Clear Evaluation Criteria',
            description:
                'Establishing specific KPIs and KRAs involves defining clear, objective, and measurable metrics that align with business goals and individual roles. KPIs (Key Performance Indicators) should be quantitative and provide insights into key performance areas, such as sales targets or customer satisfaction scores.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Implementing a Consistent Appraisal Process',
            description:
                'Designing a standardized and transparent appraisal process involves creating a uniform system for evaluating employee performance. This includes defining clear criteria and benchmarks, establishing a structured timeline for appraisals, and using standardized forms and procedures to ensure fairness and consistency across the organization.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Training and Support',
            description:
                'Providing training programs and ongoing support for the performance evaluation system involves delivering comprehensive education on the effective use of the system. Training should cover the objectives of the evaluation system, how to complete appraisal forms, and how to provide constructive feedback.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Promoting Goal-Setting',
            description:
                'Aligning individual performance goals with organizational objectives involves setting personal goals for employees that contribute to the overall business strategy. This ensures each employee’s targets support broader organizational aims and fosters cohesive progress towards business goals.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Creating Feedback Mechanisms',
            description:
                'Developing structured feedback processes involves creating a systematic approach to delivering constructive insights. This includes establishing regular feedback intervals and using standardized tools to ensure consistency. The process should focus on providing actionable feedback that highlights strengths and areas for improvement.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Performance Improvement Plans',
            description:
                'Assisting in the creation of tailored performance improvement plans involves developing strategies to address performance gaps and enhance employee capabilities. This includes identifying areas for improvement, setting achievable goals, and outlining actionable steps for development.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Reward Programs',
            description:
                'Designing and implementing reward programs involves creating systems to recognize and incentivize high-performing employees. This includes identifying criteria for rewards, such as exceptional performance metrics or achieving goals, to boost motivation and engagement.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Integration with Talent Management',
            description:
                'Aligning the performance evaluation system with broader talent management strategies involves integrating performance assessments with the organization’s approach to managing and developing talent. This includes supporting talent acquisition, career development, succession planning, and employee engagement.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Review and Improvement',
            description:
                'Regularly reviewing and refining the performance evaluation system involves assessing its effectiveness and relevance. This process includes gathering feedback from employees and managers, analyzing performance data, and evaluating alignment with organizational goals and needs.',
            img: "assets/images/369.png"
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
    <Capabilitiesbanner title={"Performance Evaluation System"} des={"Assessing and reviewing employee performance to drive growth, improve skills, and align with organizational objectives."}/> */}
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: 'Performance Evaluation System',
                des: 'Madasky Consulting offers comprehensive support to clients in developing a customized performance evaluation system that aligns with their organizational goals and culture. Our approach includes.',
                img: '/assets/images/388.png',
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
