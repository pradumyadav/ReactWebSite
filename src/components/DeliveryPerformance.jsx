import React, { useState } from 'react'
import AboutNavbar from '../components/AboutNavbar';
import Capabilitiesbanner from '../components/Capabilitiesbanner';
import CapabilitiesMainCard from '../components/CapabilitiesMainCard';
import ServiceCard from '../components/ServiceCard';
import Opportunity from '../components/Opportunity';
import HelpYou from '../components/HelpYou';
import Footer from '../components/Footer';
import ServiceTabs from '../components/ServiceTabs';
import CapabilitiesCard from './CapabilitiesCard';

export default function DeliveryPerformance() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Supplier Evaluation',
            description:
                'Conducting thorough assessments to select suppliers based on performance, quality, and reliability involves reviewing their track record, delivery adherence, and overall dependability. This evaluation helps ensure that you choose suppliers who meet high standards and can consistently deliver quality products.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Relationship Management',
            description:
                'Building and maintaining strong, cooperative relationships with key suppliers involves open communication and ongoing collaboration. Regular meetings, prompt issue resolution, and joint problem-solving efforts help foster trust and improve supplier partnerships.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Risk Management',
            description:
                'Implementing strategies to mitigate supply chain risks includes identifying vulnerabilities and developing measures to address them. This involves diversifying suppliers, creating contingency plans, and using real-time monitoring to enhance supply chain visibility and resilience.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Quality Control Systems',
            description:
                'Establishing robust quality control systems involves implementing procedures to ensure product consistency and adherence to quality standards. This includes setting up detailed inspection and testing protocols at various production stages to maintain high quality.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Improvement',
            description:
                'Ongoing monitoring and improvement of product quality involve regular audits, feedback loops, and data analysis. By evaluating adherence to quality standards and making targeted adjustments based on feedback, continuous improvement drives better performance and higher quality.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Compliance',
            description:
                'Ensuring products comply with industry standards involves rigorous quality assurance practices and staying updated with compliance requirements. This includes thorough testing, certification processes, and regular audits to verify adherence to regulations.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'User-Friendly Platforms',
            description:
                'Preparing for future leadership needs involves identifying and developing potential leaders. This process starts with recognizing high-potential employees and focusing on developing their leadership skills to ensure long-term organizational success.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Customer Support',
            description:
                'Providing excellent customer support involves offering prompt assistance through various channels such as live chat, phone, and email. This ensures that customers receive the help they need throughout their purchasing journey, enhancing their overall experience.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Seamless Transactions',
            description:
                'Ensuring smooth transaction processes involves streamlining the entire purchasing journey, from browsing to payment and delivery. This includes creating a user-friendly website or app, simplifying checkout, and offering multiple secure payment options.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Customer Engagement',
            description:
                'Enhancing customer interaction involves creating personalized experiences through tools such as email marketing, social media campaigns, and loyalty programs. These efforts help build stronger relationships and keep customers engaged with your brand.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Service Training',
            description:
                'Training staff to deliver excellent customer service involves educating them on best practices, communication skills, and problem-solving techniques. This training ensures that employees handle customer interactions professionally and empathetically, improving overall service quality.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Feedback Systems',
            description:
                'Implementing feedback systems involves setting up mechanisms like surveys and review platforms to collect customer insights. Analyzing this feedback helps identify trends and areas for improvement, allowing you to make informed changes and enhance the customer experience.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Goal Setting',
            description:
                'Defining clear performance goals involves setting SMART targets that align with your business strategy. This includes identifying focus areas, such as operational efficiency or revenue growth, and establishing metrics to track and achieve these objectives.',
            img: "assets/images/384.png"
        },
        {
            title: 'Performance Metrics',
            description:
                'Identifying and tracking KPIs involves selecting quantifiable metrics that reflect key performance aspects. KPIs such as sales growth or customer satisfaction scores help measure progress and evaluate how well goals are being met.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Continuous Monitoring',
            description:
                'Regularly monitoring performance involves assessing KPIs to evaluate progress toward business objectives. This includes analyzing data, identifying trends, and making adjustments to strategies based on performance reviews.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Process Standardization',
            description:
                'Developing standardized processes involves creating consistent workflows and procedures to ensure efficiency and reliability. Documenting best practices and establishing uniform methods helps streamline operations and maintain high standards.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Technology Integration',
            description:
                'Leveraging technology involves adopting tools and systems that streamline operations. This includes implementing ERP systems, automation for repetitive tasks, and data analytics for real-time insights to enhance consistency and efficiency.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Regular Audits',
            description:
                'Conducting regular audits involves reviewing adherence to established processes and standards. This helps identify deviations, inefficiencies, or non-compliance issues, allowing for corrective actions and alignment with organizational goals.',
            img: "assets/images/NoImage.png"
        }
    ];
    
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
        <Capabilitiesbanner title={"Delivery Performance Program"} des={"Enhancing service quality and efficiency through targeted strategies and continuous improvement."}/> */}
        <div className="max-w-8xl mx-auto px-4">
           
            <CapabilitiesMainCard
                details1={{
                    title: 'Delivery Performance Program',
                    des: "The Delivery Performance Program is meticulously designed to enhance and optimize every aspect of your delivery process. By mastering six critical areas, we ensure your business achieves excellence in supplier management, quality control, customer experience, and operational consistency. Here’s a detailed overview of the program.",
                    img: '/assets/images/NoImage.png',
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
