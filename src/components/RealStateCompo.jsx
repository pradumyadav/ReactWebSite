import React from 'react'
import Banner from './Banner'
import AboutNavbar from './AboutNavbar'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard'
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond'
import BannerThree from './BannerThree'
import AboutVideo from './AboutVideo'
import vid1 from "/assets/images/314.mp4";

export default function RealStateCompo() {
    const industries = [
        'Residential Real Estate',
        'Commercial Construction',
        'Industrial Real Estate',
        'Retail Real Estate',
      ];
  return (
    <div>
           <AboutNavbar/>
           <AboutVideo vid1={vid1} title={"Real Estate"} des={"Innovative Solutions for All Your Real Estate Needs"}/>

        {/* <BannerThree
        jewelleryInfo={
            {
                heading: "Indulge in the Artistry of Exquisite Jewelry",
                subheading: "Handcrafted Jewelry: Where Tradition Meets Modern Elegance",
                img: "assets/images/306.jpg",
                color: "bg-gray-800",              

            }
        }
        /> */}
           <div className="max-w-8xl mx-auto px-4">
       <Jewellery
                    details1={{
                        title: 'Real Estate',
                        img: '/assets/images/307.png',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: ' Market volatility,  maintaining property quality, adapting to technological advancements, infrastructure development, regulatory hurdles, and high operational costs,  Inefficiencies in managing project timelines, delays in construction and development projects due to poor coordination and planning, affecting delivery timelines and client trust,  cash flow constraints,  poor sales performance and low conversion rates,  inefficiencies and high operational costs  Ineffective team collaboration and communication can lead to misunderstandings.',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our consulting services are designed to tackle these real estate industry challenges comprehensively. Through thorough market research, we help clients make informed decisions and remain ahead of market trends, ensuring their products and services meet evolving demands. By implementing advanced supply chain management (SCM) techniques, we optimize inventory levels, minimize lead times, and enhance the efficiency of global supply chains. Establishing stringent quality management systems ensures that production processes meet the highest standards and comply with all regulatory requirements. To drive continuous improvement, we create tailored business strategies and strategic planning frameworks that align with both short term and long-term goals. We optimize day to day operations to enhance efficiency and reduce costs, while our financial management services, including cash flow forecasting and profit margin analysis, help clients maintain robust financial health and growth.',
                        img: '/assets/images/324.png',
                    }}
                />

        </div>
    </div>
  )
}
