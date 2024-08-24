import React from 'react'
import AboutNavbar from './AboutNavbar'
import Banner from './Banner'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard'
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond';
import vid1 from "/assets/images/313.mp4"
import AboutVideo from './AboutVideo'
export default function FinancialServicesCompo() {
    const industries = [
        'Accounting Firms',
        'Audit & Compliance Firms',
       
      ];
  return (
    <div> <AboutNavbar/>
                 <AboutVideo vid1={vid1} title={"Tourism"} des={"Empowering Your Business with Strategic Insights"}/>

           <div className="max-w-8xl mx-auto px-4">
       <Jewellery
                    details1={{
                      
                        title: 'Financial Services',
                        img: '/assets/images/309.jpg',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Strategic misalignment between long-term goals and daily operations is common in financial services. Poor time management can lead to bottlenecks, delays in service delivery, and ultimately, customer dissatisfaction, making it difficult to maintain financial health amidst varying market conditions, streamlining operations to reduce costs and improve service delivery, attracting and retaining skilled professionals in a highly competitive and specialized industry, and ensuring team collaboration and efficiency, particularly when dealing with cross-functional teams. Operational inefficiencies in can escalate costs and reduce effectiveness.',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our services help in setting clear, achievable goals and creating a roadmap that aligns with the company s vision. Training teams on prioritization, effective scheduling, and eliminating inefficiencies can enhance productivity, enabling them to handle complex financial transactions and client demands more efficiently.  Our programs focus on process optimization and automation.',
                        img: '/assets/images/326.jpg',
                    }}
                />

        </div>
           </div>
  )
}
