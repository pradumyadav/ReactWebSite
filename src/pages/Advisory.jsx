import AboutNavbar from '../components/AboutNavbar'
import AboutVideo from '../components/AboutVideo';
import Footer from '../components/Footer'
import vid1 from "/assets/images/342.mp4";

export default function Advisory() {
    return (
        <>
            <AboutNavbar />
            {/* <AboutVideo vid1={vid1} title={"ABOUT US"} des={"We accelerate sustainable and inclusive growth"}/> */}

            <div className='w-full h-auto flex flex-col items-center justify-center py-10 px-20'>
                <h1 className='text-6xl font-bold font-serif text-center text-primary drop-shadow-xl mb-8'>
                    Advisory Services
                </h1>
                <div className='max-w-4xl text-lg'>
                    <p className='mb-6'>
                        At Madasky Consulting, we pride ourselves on providing unparalleled advisory services, guided by the exceptional expertise and dedication of our founder, Amit Mittal. Amit's journey in the advisory domain has been marked by remarkable achievements and global recognition, making him a sought-after advisor by some of the world's leading firms.
                    </p>

                    <h2 className='text-3xl font-semibold mb-4'>Global Recognition and Prestigious Appointments</h2>
                    <p className='mb-6'>
                        Amit's dedication and proficiency in the field have not gone unnoticed. His exceptional skills and strategic insights earned him the prestigious role of Senior Advisor to several Big Four firms and other prominent global entities. This role has allowed Amit to work on high-impact international projects, where he has been instrumental in driving supply chain transformations and developing robust go-to-market strategies. Amit's advisory approach is characterized by his ability to navigate complex challenges and provide comprehensive solutions. He has guided numerous organizations through intricate problem-solving processes, helping them achieve operational excellence and strategic growth.
                    </p>

                    <h2 className='text-3xl font-semibold mb-4'>Amit's Approach</h2>
                    <p className='mb-6'>
                        Amit's approach is client-centric, focusing on understanding the unique challenges and opportunities of each organization. He collaborates closely with clients to develop actionable strategies that deliver measurable results. His commitment to excellence and relentless pursuit of innovation ensure that clients receive the highest level of advisory services.
                    </p>

                    <h2 className='text-3xl font-semibold mb-4'>Why Choose Amit Mittal for Advisory Services?</h2>
                    <ul className='list-disc pl-6 mb-6'>
                        <li className='mb-2'><strong>Global Expertise:</strong> Proven track record of success with leading organizations worldwide.</li>
                        <li className='mb-2'><strong>Tailored Solutions:</strong> Customized advisory services that address specific business needs.</li>
                        <li className='mb-2'><strong>Strategic Insight:</strong> Deep understanding of market dynamics and industry trends.</li>
                        <li className='mb-2'><strong>Commitment to Excellence:</strong> Dedication to delivering exceptional results and fostering long-term client relationships.</li>
                    </ul>

                    <p className='font-semibold'>
                        Amit Mittal's advisory services are designed to empower businesses to navigate complexities, seize opportunities, and achieve their strategic objectives. Partner with Amit to unlock your organization's full potential and drive sustainable growth.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}