import React from 'react';
import AboutNavbar from '../components/AboutNavbar';
import Banner from '../components/Banner.jsx';
import Jewellery from '../components/Jewellery.jsx';
// import ServiceTabs from '../components/ServiceTabs';
import CapabilitiesMainCard from '../components/CapabilitiesMainCard.jsx';
import vid1 from '/assets/images/319.mp4';
import AboutVideo from '../components/AboutVideo.jsx';
import Opportunity from '../components/Opportunity.jsx';
import Footer from '../components/Footer.jsx';
import CapabilitiesMainCardSecond from '../components/CapabilitiesMainCardSecond.jsx';

export default function Industries() {
    const opportunityItems1 = [
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
    const industries = [
        ' High Fashion and Luxury Brands ',
        'Fast Fashion',
        'Jewelry Design and Manufacturing',
        'Retail and E-commerce',
        'Custom and Bespoke Jewelry',
    ];

    return (
        <div>
            <AboutNavbar />
            <AboutVideo
                vid1={vid1}
                title={'Fashion & Jewellery'}
                des={'Discover the Latest Trends in Fashion and Fine Jewelry'}
            />

            <div className="max-w-8xl mx-auto px-4">
                <Jewellery
                    details1={{
                        title: 'Fashion And Jewellery',
                        img: '/assets/images/360.png',
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Maintaining brand exclusivity, Ensuring efficient global supply chains, Intense competition, Maintaining Quallity, Managing inventory levels, dealing with returns and exchanges, Enhancing customer experience, managing production timelines, maintaining high service levels,  integrating new technologies, and developing long-term strategies',
                        img: '/assets/images/321.jpg',
                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our services help in setting clear, achievable goals and creating a roadmap that aligns with the company s vision. Training teams on prioritization, effective scheduling, and eliminating inefficiencies can enhance productivity, enabling them to handle complex financial transactions and client demands more efficiently.  Our programs focus on process optimization and automation.',
                        img: '/assets/images/333.jpg',
                    }}
                />
                <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-5xl from-neutral-500 text-gray-800  font-bold mb-4">
                      Blogs
                    </h1>
                    <p className="text-xl mb-8 text-gray-600 ">
                        Accelerating sustainable and inclusive growth is vital
                        for people and economies to prosper. This can only
                        happen if every person, regardless of their background
                        or level of education, has an opportunity to thrive in
                        the economy and workforce.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {opportunityItems1.map((item, index) => (
                            <Opportunity {...item} key={index} />
                        ))}
                    </div>
                </div>{' '}
                <Footer />
            </div>
        </div>
    );
}
