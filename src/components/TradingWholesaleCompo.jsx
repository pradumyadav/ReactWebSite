import React from 'react'
import AboutNavbar from './AboutNavbar'
import Banner from './Banner'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard';
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond';
import vid1 from "/assets/images/359.mp4"
import AboutVideo from './AboutVideo';

export default function TradingWholesaleCompo() {
    const industries = [
        'Consumer goods wholesale',
        'Industrial Goods wholesale',
        'Agricultural Products Trading',
        'Electronics and Technology Wholesale',
        'Automotive Parts Wholesale',
        'Pharmaceutical and Healthcare Products Wholesale',
      ];
  return (
    <div>
        <AboutNavbar/>
        <AboutVideo vid1={vid1} title={"Trading and Wholesale"} des={"Streamlining Supply Chains Through Expert Trading Services"}/>
    
        <div className="max-w-8xl mx-auto px-4">
       <Jewellery
                    details1={{
                        title: 'Trading and Wholesale Industries',                    
                        img: '/assets/images/310.jpg',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'High-volume traders such as bulk clothing vendors and suppliers in agricultural trading face complex logistical challenges that require precise time management to avoid costly delays and inefficiencies.Timely delivery is critical, especially for boutique wholesale vendors and sectors dealing with perishable goods like agricultural products, Wholesale retail suppliers and wholesale clothing suppliers often lag in adopting digital marketing strategies necessary to engage a broader, tech-savvy customer base effectively. Operational inefficiencies in managing extensive inventories, particularly in wholesale clothing suppliers, compliance with industry standards, high operational costs, and fluctuating demand.',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our services help market analysis and trend forecasting to help businesses set achievable, market-aligned goals, ensuring that strategic planning, Focuses on inventory optimization supply chain management and inventory planning,  Employs advanced supply chain optimization techniques and real-time tracking systems to enhance delivery reliability and efficiency, and uses inventory optimization supply chain management to automate and refine inventory management, boosting operational productivity and reducing costs.',
                        img: '/assets/images/328.jpg',
                    }}
                />

        </div>
    </div>
  )
}
