import Capabilities from '../components/Capabilities';
import FlexBox from '../components/FlexBox';
import ApprochCard from '../components/ApprochCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import AboutNavbar from '../components/AboutNavbar';

export default function CapabilitiesOverview() {
    const arr = [
        {
            image: '/assets/images/274.png',
            title: ' Understanding Challenges',
            des: 'refers to a working relationship where the consultant or advisor engages  client throughout the advisory process....',
        },
        {
            image: '/assets/images/273.jpg',
            title: 'Actionable Strategies',
            des: 'means creating and implementing plans or  achieve specific, quantifiable outcomes. Here’s a detailed explanation:...',
        },
        {
            image: '/assets/images/1.webp',
            title: 'Commitment to Excellence',
            des: ' means actively seeking out and applying new and advanced methods, technologies, and ideas to enhance the quality ..',
        },
        {
            image: '/assets/images/1.webp',
            title: ' Understanding Challenges',
            des: ' refers to a working relationship where the consultant or advisor engages deeply and directly with the client...',
        },
    ];
    return (
        <>
            <AboutNavbar />
            <Capabilities />
            <FlexBox
                link="#"
                image="/assets/images/1.webp"
                order="flex-row"
                title="Expert Advisory Services"
                text="At Madasky Consulting we pride ourselves on providing unparalleled advisory services, guided by the exceptional expertise and dedication of our founder, Amit Mittal. Amits journey in the advisory domain has been marked by remarkable achievements and global recognition making him a sought-after advisor by some of the worlds leading"
            />
            <FlexBox
                link="#"
                image="/assets/images/1.webp"
                order="flex-row-reverse"
                title="Global Recognition and Prestigious Appointment"
                text="Amit s dedication and proficiency in the field have not gone unnoticed. His exceptional skills and strategic insights earned him the prestigious role of Senior Advisor to several Big Four firms and other prominent global entities. 
"
            />
            <div className="bg-[#002e5c] py-12 px-8 sm:px-16 lg:px-24">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Amit&apos;s Approach
                    </h2>

                    <p className="text-lg text-white mb-8 text-center my-6">
                        Amit&apos;s advisory approach is characterized by his ability
                        to navigate complex challenges and provide comprehensive
                        solutions. He has guided numerous organizations through
                        intricate problem-solving processes, helping them
                        achieve operational excellence and strategic growth.
                    </p>
                </div>

                <div className="keep-exploring-grid grid grid-cols-4 gap-[20px]  mt-9 ">
                    {arr.map((item, index) => (
                        <ApprochCard {...item} key={index} />
                    ))}
                </div>

            </div>
            <div className='w-full flex content-center '>
                <WhyChooseUs />
            </div>
            <Footer />
        </>
    );
}
