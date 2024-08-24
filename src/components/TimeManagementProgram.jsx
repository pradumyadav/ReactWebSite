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
export default function TimeManagementProgram() {
    const [visibleCards, setVisibleCards] = useState(1);
    const [isShowingMore, setIsShowingMore] = useState(true);
    const services = [
        {
            title: 'Working IN & On the Business',
            description:
                'Balancing daily operational tasks with strategic planning is crucial for sustainable growth. We focus on managing day-to-day functions efficiently while dedicating time to long-term vision and innovation. This balance ensures immediate needs are met and future success is paved.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Default Calendar',
            description:
                'A structured calendar helps manage time effectively by scheduling key activities, meetings, and personal time into dedicated blocks. This approach builds productive habits while allowing flexibility for unexpected tasks, ensuring consistent prioritization of important activities.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Time Logs',
            description:
                'Maintaining detailed time logs is essential for identifying inefficiencies and improving productivity. By recording and analyzing your activities, we uncover patterns, spot inefficiencies, and implement strategies to optimize your time usage for enhanced efficiency.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Clear Goals',
            description:
                'Setting CLEAR goals ensures focus and alignment with business objectives. Goals should be Clear, Logical, Executable, Accountable, and Realistic. This framework helps in maintaining purposeful efforts and strategic alignment with your long-term vision.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Value of Time',
            description:
                'Assessing the value of your time helps prioritize high-impact activities that contribute to your goals. By focusing on significant tasks and implementing strategies to maximize time value, you can enhance productivity and make informed decisions.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Delegation',
            description:
                'Effective delegation involves identifying tasks to be assigned to others and providing necessary training and resources. Monitoring the completion of delegated tasks ensures high standards while freeing up your time for strategic activities.',
            img: "assets/images/NoImage.png"
        },
        {
            title: 'Program Benefits',
            description:
                "Join the Time Management Program to achieve a balanced approach to daily and strategic tasks, implement a structured calendar, and utilize time logs for efficiency. Set CLEAR goals, prioritize based on time value, and master delegation to enhance productivity and achieve your business objectives.",
            img: "assets/images/NoImage.png"
        }
    ];
    
    const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/198.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/205.webp',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/200.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/204.jpg',
            link: '#',
        },
    ];
    const opportunityItems2 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/211.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/215.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/218.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/217.jpg',
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
        <Capabilitiesbanner title={"Time Management Programg"} des={"A Time Management Program helps efficiently organize and prioritize tasks to maximize productivity."}/> */}
        <div className="max-w-8xl mx-auto px-4">
           
            <CapabilitiesMainCard
                details1={{
                    title: 'Time Management Program',
                    des: "The Time Management Program is designed to help you maximize efficiency, prioritize tasks, and achieve a healthy work-life balance. By mastering six key areas, you can optimize your time, work more effectively, and reach your business goals. Here’s a detailed overview of the program.",
                    img: '/assets/images/390.png',
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
        {/* <div className=" bg-gray-100  rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
