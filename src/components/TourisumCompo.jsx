import React from 'react'
import AboutNavbar from './AboutNavbar'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard'
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond'

export default function TourisumCompo() {
    const industries = [
        'Hospitality (Hotels and Resorts)',
        'Travel Agencies and Tour Operators',
        'Food and Beverage (Restaurants and Catering Services)',
       
      ];
  return (
    <div>
       <AboutNavbar/>
       {/* <AboutVideo vid1={vid1} title={"Tourism"} des={"Empowering Your Business with Strategic Insights"}/> */}
            <div className="w-full">
            <img
                    className="w-full h-[90vh] object-cover"
                    src="/assets/images/362.png"
                    alt="Aspiration"
                />
            </div>
       <div className="max-w-8xl mx-auto px-4">
       <Jewellery
                    details1={{
                        title: 'Tourism',
                        img: '/assets/images/304.png',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Managing inventory levels, maintaining, quality management systems, Seasonal Demand Fluctuations, Lead Times, Intense competition, Ensuring smooth day to day operations while minimizing costs is a significant challenge, Managing high operational costs, a culture of continuous improvement, monthly P&L reviews, cashflow forecasting, and profit margin analysis.',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our consulting services address these challenges through tailored programs focused on business strategy and strategic planning, helping clients navigate competition and market changes effectively. Our expertise in supply chain management (SCM) helps optimize inventory and logistics, ensuring efficiency and cost-effectiveness. Conducting thorough marketing research allows us to inform decisions and adapt to consumer trends, ensuring clients remain competitive and relevant. Using KPI dashboards and gap analysis, we track and improve performance, providing insights for continuous improvement. ',
                        img: '/assets/images/330.jpg',
                    }}
                />

        </div>
    </div>
  )
}
