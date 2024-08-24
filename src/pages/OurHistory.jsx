import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/Footer';
import AboutNavbar from '../components/AboutNavbar';

export default function OurHistory() {
    const timelineData = [
        {
            title: ' Becoming a Private Limited Company and Team Growth',
            description:
                'In 2024, Madasky Consulting evolved into a Private Limited Company with a presence in eight countries. The firm continued to drive innovation and excellence globally, solidifying its position as a leader in the consulting industry. Madasky Consulting grew into a large team comprising experts from various fields, dedicated to delivering high-impact solutions to clients. Amit’s journey from a classroom vision to a global consulting firm stands as a testament to the power of dedication and transformative impact.',
            image:"assets/History/6.png",
            backgroundColor: '#ffffff',
            date: '2024',
        },
        {
            title: ' Geographic Expansion',
            description:
                'By 2023, Madasky Consulting had expanded its presence beyond India to several other countries.This expansion was driven by the growing demand for Madasky Consulting’s services worldwide, further establishing its international footprint.',
            image:"assets/History/5.png",
            backgroundColor: '#ffffff',
            date: '2023',
        },
        {
            title: 'Enhancing Client Solutions',
            description:
                'Throughout 2022, Madasky Consulting focused on enhancing its client solutions. The firm introduced new services, including plant design, material flow optimization, and warehousing solutions. These additions helped clients achieve greater efficiency and productivity in their operations. The firm also started implementing various sales programs, KPI tracking systems, cost optimization strategies, and management programs to support client growth.',
            image:"assets/History/2.png",
            backgroundColor: '#ffffff',
            date: '2022',
        },
        {
            title: 'Global Recognition and Team Expansion',
            description:
                "In 2021, Amits dedication and expertise were recognized on a global scale. He was appointed as a Senior Advisor to McKinsey & Company, working on international projects involving supply chain transformation and go-to-market strategies. This role further solidified Madasky Consulting's reputation as a leading consulting firm. Additionally, Amit began expanding his team bringing in experts from various industries to enhance the firms consulting capabilities and broaden its service offerings.",
            image: "assets/History/8.png",
            backgroundColor: '#ffffff',
            date: '2021',
        },
        {
            title: 'Partnership with ActionCOACH',
            description:
                "A significant milestone was achieved in 2020 when Madasky Consulting partnered with ActionCOACH. Amit became a certified Business and Executive Coach, enhancing his ability to support clients in achieving their business goals. This partnership aligned with his mission to create wealth for 20,000 businesses and 100,000 jobs, reinforcing Madasky Consulting's commitment to impactful business transformation.",
            image:"assets/History/7.png",
            backgroundColor: '#ffffff',
            date: '2020',
        },
        {
            title: ' Expanding Services',
            description:
                'Madasky Consulting expanded its service offerings in 2019, introducing specialized programs for sales and management. The firm also began offering business progress memberships, providing clients with continuous support and access to exclusive resources and expertise. These new services significantly enhanced the value proposition of Madasky Consulting',
            image:"assets/images/NoImage.png",
            backgroundColor: '#ffffff',
            date: '2019',
        },
        {
            title: 'Founding Madasky Consulting',
            description:
                "In 2018, Amit officially founded Madasky Consulting. The firm aimed to provide transformative consulting services to both large corporations and MSMEs. Madasky Consulting focused on management consulting, business coaching, and advisory services, with a commitment to driving business growth and operational excellence.",
            image: "assets/History/4.png",
            backgroundColor: '#ffffff',
            date: '2018',
        },
        {
            title: 'The Genesis and Growth of Madasky Consulting',
            description:
                "Madasky Consulting was born out of Amit Mittal's vision to leverage business as a transformative force. As a student at Stern Business School, New York University, Amit began offering pro bono consulting services to the garments and home textile industry. His innovative solutions and strategic insights quickly earned him recognition and a reputation as a sought-after independent consultant.Building on this success, Amit expanded his services to include workflow optimization, plant layout design, and manpower optimization, significantly improving operational efficiency for large garments and home textile companies . His expertise soon extended to various industries, including manufacturing and retail, broadening scope and establishing its credibility.",
            image:"assets/History/3.png",
            backgroundColor: '#ffffff',
            date: '2013-2018',
        },
       
    ];

    return (
        <>
            <AboutNavbar />
            <div className="flex justify-center items-center py-10">
                <div className="max-w-6xl  flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-2/5">
                        <div>
                            <h1 className="font-serif leading-tight">
                                <span className="block text-8xl font-bold">
                                    History
                                </span>
                                <span className="text-4xl">
                                    of our{' '}
                                    <span className="text-8xl font-bold">
                                        firm
                                    </span>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="flex flex-col gap-6">
                            <p className="text-2xl font-light leading-snug ">
                                In January 2013, a classroom at Stern Business
                                School sparked a vision in Amit Mittal: to
                                harness business as a force for broader industry
                                impact. Starting with pro bono consulting for
                                the home textile industry, Amit’s expertise
                                quickly gained recognition, leading him to
                                become a sought-after independent management
                                consultant.
                            </p>
                            <p className="text-2xl font-light leading-snug " >
                                In 2018, he founded Madasky
                                Consulting, aiming to extend his transformative
                                services to both large corporations and MSMEs.
                                His mission gained further momentum in 2020
                                through a partnership with ActionCOACH, where he
                                became a Business and Executive Coach, committed
                                to creating wealth for 20,000 businesses and
                                100,000 jobs.
                                </p>
                            <p className="text-xl leading-7 text-gray-600">
                                Amit’s dedication was recognized globally in
                                2021 when he was appointed Senior Advisor to
                                McKinsey & Company. By 2024, Madasky Consulting
                                had evolved into a Private Limited Company with
                                a presence in eight countries, continuing to
                                drive innovation and excellence across the
                                globet will thrive for this generation and the
                                next. Amit’s journey from a classroom vision to
                                a global consulting firm stands as a testament
                                to the power of dedication and transformative
                                impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <VerticalTimeline lineColor="#ddd">
    {timelineData.map((item, index) => (
        <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work ${
                index % 2 === 0 ? 'left' : 'right'
            } animate-element`}
            contentStyle={{
                background: item.backgroundColor,
                color: '#000',
                boxShadow: 'none',
                border: '1px solid #ddd',
                padding: '30px',
                borderRadius: '8px',
                width: '100%',
                
            }}
            contentArrowStyle={{ display: 'none' }}
            iconStyle={{ display: 'none' }}
        >
            <div
                className={`content-wrapper flex ${
                    index % 2 === 0
                        ? 'flex-row'
                        : 'flex-row-reverse'
                } items-center gap-5`}
            >
                <div className="text-content flex-1">
                    <h2 className="pb-4">{item.date}</h2>
                    <h3 className="text-2xl font-semibold">
                        {item.title}
                    </h3>
                    <p>{item.description}</p>
                </div>
                <div className="image-content flex-1 relative" style={{ paddingBottom: '30%' }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </VerticalTimelineElement>
    ))}
</VerticalTimeline>
            <Footer />
        </>
    );
}
