import React from 'react'
import Banner from './Banner'
import AboutNavbar from './AboutNavbar'
import Jewellery from './Jewellery'
import CapabilitiesMainCard from './CapabilitiesMainCard'
import CapabilitiesMainCardSecond from './CapabilitiesMainCardSecond'
import vid1 from "/assets/images/364.mp4";
import AboutVideo from './AboutVideo'


export default function ManfucaturingCompo() {
    const industries = [
        'Automotive Manufacturing',
        'Apparel Industry',
        'Home Textile Industry',
        'Electronics Manufacturing',
        'Food and Beverage Manufacturing',
        'Pharmaceutical Manufacturing',
        'Chemical Manufacturing',
        'Textile Manufacturing',
        ' Footwear',
        'Beauty and Careg',
       
      ];
  return (
    <div>

        <AboutNavbar/>
        <AboutVideo vid1={vid1} title={"Manufacturing"} des={"Driving Innovation and Quality in Manufacturing"}/>

           <div className="max-w-8xl mx-auto px-4">
           <Jewellery
                    details1={{
                        title: 'Manufacturing Industries',
                        img: '/assets/images/361.png',
                    }}
                    industries={industries}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Key challanges faced by the industry',
                        des: 'Manufacturers, including clothing manufacturers for startups and plastic manufacturers often face disruptions due to raw material shortages, geopolitical tensions, or global health crises. These disruptions can halt production lines and inflate costs.The pace of technological innovation requires manufacturers to continuously adapt and integrate new technologies like smart factory solutions and manufacturing technology to stay competitive. There is a skills gap, particularly acute in areas like smart manufacturing and plastic molding company operations, hindering growth and innovation. Fluctuating market demands, such as those faced by clothing manufacturers for startups, require quick adaptation to prevent inventory issues. Managing production costs,  ensuring quality control, and handling competitive pricing pressures.',
                        img: '/assets/images/321.jpg',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How we help our clients? ',
                        des: 'Our services focused on creating resilient supply chains through advanced forecasting, diversified sourcing, and enhanced logistics management, adopting and integrating cutting-edge technologies like smart factory setups and manufacturing technology innovations,  Focused on improving product quality across manufacturing processes, we provide cost reduction strategies, resource optimization, and financial planning to improve profitability and manage production expenses,  strategies to streamline operations, enhance workforce productivity, and improve overall manufacturing efficiency',
                        img: '/assets/images/326.jpg',
                    }}
                />

        </div>
    </div>
  )
}
