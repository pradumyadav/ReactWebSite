import React from 'react'
import Banner from './Banner'
import AboutNavbar from './AboutNavbar'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard'
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond'
import AboutVideo from './AboutVideo'
import vid1 from "/assets/images/315.mp4";

export default function ConstuctionCompo() {
    const industries = [
        'Residential Construction',
        'Commercial Construction',
        'Industrial Construction',
        'Infrastructure Construction',
        'Sustainable and Green Construction',
      ];
  return (
    <div>
        <AboutNavbar/>
        <AboutVideo vid1={vid1} title={"Construction"} des={"Building Excellence: Innovative Construction Solutions"}/>

        <div className="max-w-8xl mx-auto px-4">
       <Jewellery
                    details1={{
                        title: 'Construction',
                        img: '/assets/images/308.png',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Ensuring efficient production processes while controlling costs, innovation and flexibility, informed by thorough market research, maintain a competitive advantage, Efficient strategic planning, Managing global supply chains for materials and equipment, quality management systems, maintain timelines and budgets,  precise business strategy, Integrating existing production processes. ',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients ? ',
                        des: 'Our consulting services address these challenges through tailored programs focused on business strategy and strategic planning. Implementing robust quality management systems maintains high standards in products and services, We support clients with financial management tools, including P&L reviews, cashflow forecasting, and profit margin analysis. We help in developing Business Strategies.',
                        img: '/assets/images/331.jpg',
                    }}
                />

        </div>
    </div>
  )
}
