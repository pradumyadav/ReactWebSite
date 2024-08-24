import React from 'react'
import AboutNavbar from './AboutNavbar';
import Capabilitiesbanner from './Capabilitiesbanner';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import ServiceCard from './ServiceCard';
import Opportunity from './Opportunity';
import HelpYou from './HelpYou';
import Footer from './Footer';
import ServiceTabs from './ServiceTabs';
export default function SalesAccelator() {
    const services = [
        {
            title: 'Supplier Evaluation',
            description:
                'Conducting thorough assessments to select suppliers based on performance, quality, and reliability involves evaluating potential suppliers through a detailed process. This includes reviewing their track record for delivering high-quality products, assessing their adherence to delivery schedules, and analyzing their overall reliability. ',
        },
        {
            title: 'Relationship Management',
            description:
                "Building and maintaining strong, cooperative relationships with key suppliers involves open communication, mutual trust, and ongoing collaboration. This includes regular meetings to discuss performance, addressing any issues promptly, and working together to solve problems and improve processes. ",
        },
        {
            title: 'Risk Management',
            description:
                "Implementing strategies to mitigate supply chain risks involves identifying potential vulnerabilities and developing proactive measures to address them. This includes diversifying suppliers, creating contingency plans for key risks, and enhancing visibility into the supply chain through real-time monitoring and data analytics.",
        },
        {
            title: 'Quality Control Systems',
            description:
                'Establishing robust quality control systems and processes involves implementing comprehensive procedures to ensure product consistency and meet quality standards. This includes setting up detailed inspection and testing protocols at various stages of production. ',
        },
        {
            title: 'Continuous Improvement',
            description:
                "Ongoing monitoring and improvement of product quality involves conducting regular audits to assess adherence to quality standards and identify areas for enhancement. Implementing feedback loops, where insights from audits, customer feedback, and production data are analyzed, helps drive continuous improvements. ",
        },
        {
            title: 'Compliance',
            description:
                "Ensuring all products comply with industry standards and regulations involves implementing rigorous quality assurance practices and staying updated with relevant compliance requirements. This includes conducting thorough testing, certification processes, and regular audits to verify adherence to standards. ",
        },
        {
            title: 'User-Friendly Platforms',
            description:
                "Preparing for future leadership needs by identifying and developing potential leaders is crucial for ensuring the long-term success and stability of an organization. This process begins with identifying high-potential employees who demonstrate leadership qualities, such as strong decision-making .",
        },
        {
            title: 'Customer Support',
            description:
                "Providing excellent customer support throughout the purchasing process involves offering prompt, helpful assistance to address any queries or issues that arise. This includes having knowledgeable support staff available via various channels such as live chat, phone, and email to guide customers through their purchasing journey.  ",
        },
        {
            title: 'Seamless Transactions',
            description:
                "Ensuring smooth and hassle-free transaction processes involves streamlining every stage of the purchasing journey, from browsing to payment and delivery. This includes designing an intuitive and user-friendly website or app, simplifying the checkout process, and offering multiple secure payment options. Additionally, providing clear information on delivery times",
        },
        {
            title: 'Customer Engagement',
            description:
                "Enhancing customer interaction and engagement involves creating meaningful and personalized experiences that foster strong relationships. This includes utilizing tools such as personalized email marketing, interactive social media campaigns, and loyalty programs to connect with customers on a deeper level.",
        },
        {
            title: 'Service Training',
            description:
                "Training staff to deliver top-notch customer service involves providing comprehensive education on best practices, communication skills, and problem-solving techniques. This training should focus on instilling a customer-centric mindset, teaching staff how to handle various customer interactions professionally and empathetically.",
        },
        {
            title: 'Feedback Systems',
            description:
                "Implementing systems to gather and act on customer feedback involves setting up mechanisms such as surveys, feedback forms, and customer review platforms to collect insights on service quality. Analyzing this feedback helps identify trends, strengths, and areas for improvement. Acting on the insights gained involves making targeted adjustments to processes, addressing recurring issues, and implementing changes that enhance the overall customer experience.",
        },
        {
            title: 'Goal Setting',
            description:
                "Defining clear performance goals and objectives involves setting specific, measurable, achievable, relevant, and time-bound (SMART) targets that align with your overall business strategy. This process includes identifying key areas of focus, such as operational efficiency, customer satisfaction, or revenue growth, and establishing metrics to track progress. ",
        },
        {
            title: 'Performance Metrics',
            description:
                "Identifying and tracking key performance indicators (KPIs) involves selecting specific, quantifiable metrics that reflect critical aspects of performance aligned with your goals. KPIs might include measures such as sales growth, customer satisfaction scores, or operational efficiency rates.",
        },
        {
            title: 'Continuous Monitoring',
            description:
                "Regularly monitoring and reviewing performance involves continuously assessing key metrics and KPIs to evaluate progress toward business objectives. This process includes analyzing performance data, identifying trends, and comparing results against goals. By conducting regular reviews, you can detect issues early, adjust strategies as needed, and implement improvements to drive continuous growth",
        },
        {
            title: 'Process standardization',
            description:
                "Developing and implementing standardized operational processes involves creating consistent procedures and workflows that ensure high levels of efficiency and reliability. This includes documenting best practices, defining clear protocols for tasks and responsibilities, and establishing uniform methods for handling routine operations.  ",
        },
        {
            title: 'Technology Integration',
            description:
                "Leveraging technology to enhance consistency and efficiency involves implementing advanced tools and systems that streamline and automate various aspects of operations. This includes adopting enterprise resource planning (ERP) systems for integrated management, utilizing automation for repetitive tasks, and employing data analytics for real-time insights. ",
        },
        {
            title: 'Regular Audits',
            description:
                "Conducting regular audits involves systematically reviewing and evaluating adherence to established processes and standards. This process helps identify deviations, inefficiencies, or non-compliance issues. Through detailed inspections and assessments, you can pinpoint areas for improvement, implement corrective actions, and ensure that processes align with organizational standards and goals. ",
        },
       
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
  return (
    <>
        {/* <AboutNavbar />
        <Capabilitiesbanner title={"Delivery Performance Program"} des={"Enhancing service quality and efficiency through targeted strategies and continuous improvement."}/> */}
        <div className="max-w-8xl mx-auto px-4">
           
            <CapabilitiesMainCard
                details1={{
                    title: 'Delivery Performance Program',
                    des: "The Delivery Performance Program is meticulously designed to enhance and optimize every aspect of your delivery process. By mastering six critical areas, we ensure your business achieves excellence in supplier management, quality control, customer experience, and operational consistency. Here’s a detailed overview of the program.",
                    img: '/assets/images/297.jPG',
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
            <ServiceTabs services={services} />
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
