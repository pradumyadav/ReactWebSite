import AboutNavbar from './AboutNavbar';
import AboutVideo from './AboutVideo';
import BulletSection from './BulletSection';
import DoubleCard from './DoubleCard';
import Footer from './Footer';
import vid1 from "/assets/images/345.mp4";

export default function HowWeWork() {
    return (
        <>
        <AboutNavbar />
        <AboutVideo vid1={vid1} title={""} des={""}/>
        <DoubleCard
            title={'How We Work'}
            order={'flex-row-reverse'}
            height="100vh"
            image="/assets/images/346.jpg"
            description={[
                'At Madasky Consulting, our approach is designed to deliver exceptional value and ensure your success. We combine deep industry expertise with innovative methodologies to create tailored solutions that meet your unique needs.',
                'Coaching Program: Our coaching services are designed to empower small and startup businesses. We offer a variety of programs to address different aspects of business growth and development.',
                'We begin with a thorough consultation to understand your business, its challenges, and opportunities. This helps us tailor our service to meet your specific needs. Our coaching services  enhance client’s  sales and marketing efforts, helping you reach your target audience and drive revenue growth. There are many programs designed for sales and marketing which focus on developing effective leadership skills, optimizing team performance',
            ]}
            additionalFields={
                <BulletSection
                    title={'Consulting Programs'}
                    description={[
                        'We offer a variety of programs to address different aspects of business growth and development.',
                        'Our process begins with a thorough analysis of client’s  business to identify opportunities for improvement and growth.',
                        'We develop strategic plans to achieve your business goals and drive sustainable growth. Defining clear, actionable goals aligned with your vision and create a  detailed roadmaps outlining the steps needed to achieve your objectives.',
                        'We provide hands-on support to ensure successful implementation and execution. Managing projects from start to finish for timely and effective execution.',
                        'We measure success and make data-driven decisions to continuously enhance performance. Establishing key performance indicators to track progress and measure success.',
                        'Conduct regular reviews to assess performance and identify further improvement opportunities. ',
                        'Our goal is to empower your team to sustain and build upon the success we help you achieve.'
                    ]}
                />
            }
        />
        <Footer/>
        </>
    );
}
