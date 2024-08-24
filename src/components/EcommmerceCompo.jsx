import React from 'react';
import AboutNavbar from './AboutNavbar';
import Banner from './Banner';
import Jewellery from './Jewellery';
import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond';
import AboutVideo from './AboutVideo';
import vid1 from "/assets/images/317.mp4";

export default function EcommmerceCompo() {
    const industries = [
        'Retail E-commerce',
        'Marketplace Platforms',
        'B2B E-commerce',
        'Direct-to-Consumer (DTC) Brands',
        'Wholesale E-commerce Platforms',
        'Growing E-commerce Business',
    ];
    return (
        <div>
            <AboutNavbar />
            <AboutVideo vid1={vid1} title={"E-Commerce"} des={"Expert E-Commerce Solutions for Growing Your Business"}/>

            <div className="max-w-8xl mx-auto px-4">
                <Jewellery
                    details1={{
                        title: 'E-Commerce Industries',
                        img: '/assets/images/311.jpg',
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Developing a robust, scalable, and efficient B2B e-commerce platform that can handle complex business transactions and integrate seamlessly with existing systems; establishing a strong online brand and effective marketing in a competitive market, especially for niches like fashion e-commerce, Managing complex logistics for wholesale e-commerce platforms, involving large-scale and variable orders,  Developing platforms that cater to business to business e-commerce needs, supporting large orders and complex customer management',
                        img: '/assets/images/321.jpg',
                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our services include involve strategies to enhance digital presence using SEO, content marketing, and social media tailored for B2B e-commerce companies.Optimizing logistics to streamline supply chains, improve inventory management, and integrate with reliable e-commerce shipping companies.managing daily operations, processing orders efficiently, and maintaining accurate inventory levels to avoid stock issues.',
                        img: '/assets/images/326.jpg',
                    }}
                />
            </div>
        </div>
    );
}
