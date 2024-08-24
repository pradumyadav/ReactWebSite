

import AboutNavbar from '../components/AboutNavbar';
import AboutVideo from '../components/AboutVideo';
import CapabilitiesMainCard from '../components/CapabilitiesMainCard';
import CapabilitiesMainCardSecond from '../components/CapabilitiesMainCardSecond';
import CapabilitiesMainCardThird from '../components/CapabilitiesMainCardThird';
import Footer from '../components/Footer';

import vid1 from "/assets/images/video-1.mp4";


export default function PurposeVisionMission() {
    return (
        <>
            <AboutNavbar />
            <AboutVideo vid1={vid1} title={""} des={""}/>
            <div>

            <CapabilitiesMainCard
                    details1={{
                        title: 'Purpose',
                        des: 'MADASKY Consulting exists to bridge the gap between ambition and achievement for organizations worldwide. We are committed to harnessing the power of expert knowledge and innovative strategies to tackle complex problems, optimize operations, and unlock the full potential of our clients. Our purpose is to create lasting value and positive impact, ensuring that every client we serve experiences tangible, sustained success.',
                        img: '/assets/images/347.png',
                    }}
                />
                 <CapabilitiesMainCardSecond
                    details1={{
                        title: 'Vision ',
                        des: 'To be the premier provider of industry-leading expertise, empowering organizations to achieve transformative success and sustained excellence through innovative, impactful solutions.',
                        img: '/assets/images/348.jpg',
                    }}
                />
                 <CapabilitiesMainCard
                    details1={{
                        title: 'Mission',
                        des: 'MADASKY Consulting is committed to transforming 20,000 businesses and creating 100,000 jobs by providing unparalleled consulting services. We deploy expert talent to tackle critical challenges, drive measurable improvements, and build long-term partnerships for continuous growth and excellence.',
                        img: '/assets/images/349.jpg',
                    }}
                />
                 <CapabilitiesMainCardThird
                    details1={{
                        title: 'Values',
                        des: 'Customer Centricity ',
                        img: '/assets/images/350.jpg',
                    }}
                />
            </div>
            <Footer />
        </>
    );
}
