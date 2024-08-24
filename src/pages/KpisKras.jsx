import React from 'react'
import AboutNavbar from '../components/AboutNavbar';
import Capabilitiesbanner from '../components/Capabilitiesbanner';
import CapabilitiesMainCard from '../components/CapabilitiesMainCard';
import ServiceCard from '../components/ServiceCard';
import Opportunity from '../components/Opportunity';
import HelpYou from '../components/HelpYou';
import Footer from '../components/Footer';
export default function KpisKras() {
    const services = [
        {
            title: 'Collaborative Goal Setting',
            description:
                'Working closely with clients to define clear business objectives involves engaging in detailed discussions to understand their strategic vision and goals. This process includes identifying key priorities, analyzing current challenges, and aligning objectives with the client’s long-term strategy. By collaborating with clients to establish specific, measurable, achievable, relevant, and time-bound (SMART) goals, you ensure that objectives are well-defined and actionable. ',
        },
        {
            title: 'Identifying relevant KPIs',
            description:
                "Identify and customize KPIs to meet the specific needs of the client's business, ensuring they are practical and actionable.Benchmark KPIs against industry standards to ensure competitiveness and relevance.",
        },
        {
            title: 'Defining Critical Result Areas (KRAs)',
            description:
                'Defining critical result areas (CRAs) essential for achieving business objectives involves identifying key areas where performance directly impacts the success of the organization. This includes determining the most important tasks and outcomes that contribute to achieving strategic goals. Tailoring Key Result Areas (KRAs) to specific roles involves aligning these critical areas with the responsibilities and expectations of each position within the organization.',
        },
        {
            title: 'Performance Monitoring Systems',
            description:
                'Designing and implementing performance monitoring systems involves setting up tools and processes that deliver real-time data and insights into organizational performance. This includes selecting appropriate software solutions that track and analyze Key Performance Indicators (KPIs) and Key Result Areas (KRAs), and integrating these metrics into existing management systems for seamless tracking and reporting',
        },
        {
            title: 'Providing actionable insights',
            description:
                'Analyzing performance data involves examining metrics and trends to derive actionable insights and identify areas for improvement. This process includes interpreting data to uncover patterns, challenges, and opportunities. Based on these insights, you can develop recommendations to enhance performance and address any issues.',
        },
        {
            title: 'Training and support',
            description:
                'Offering training programs to educate employees on the importance of KPIs and KRAs involves creating educational sessions that explain how these metrics impact performance and align with organizational goals. Training should cover how to interpret and utilize KPIs and KRAs effectively in their roles. ',
        },
        {
            title: 'Regular reviews and adjustments',
            description:
                'Conducting regular reviews of KPIs and KRAs involves periodically assessing their effectiveness and relevance to ensure they align with current business objectives and performance goals. This process includes evaluating whether the metrics are accurately reflecting desired outcomes and identifying any areas that may need adjustment. ',
        },
        {
            title: 'Integration into Overall Performance Management',
            description:
                'Integrating KPIs and KRAs into the overall performance management system involves embedding these metrics into the core processes for monitoring and enhancing performance. This integration ensures that KPIs and KRAs are consistently used to track progress, evaluate effectiveness, and guide operational decisions .',
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
  return (
    <>
    <AboutNavbar />
    <Capabilitiesbanner title={"KPI's and KRA's"} des={"Metrics and objectives used to measure performance and achieve key results, ensuring alignment with organizational goals."}/>
    <div className="max-w-8xl mx-auto px-4">
       
        <CapabilitiesMainCard
            details1={{
                title: "KPI's and KRA's",
                des: 'Madasky Consulting provides comprehensive support to clients in establishing and managing key performance indicators (KPIs) and key result areas (KRAs). Our approach ensures that clients can effectively monitor performance, make informed decisions, and achieve their business goals. Our detailed services include:',
                img: '/assets/images/299.jpg',
            }}
        />
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-9 mt-6">
            HOW WE HELP CLIENTS
        </h2>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    </div>
    <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
    <Footer/>
</>
  )
}
