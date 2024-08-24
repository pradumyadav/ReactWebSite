// import AboutNavbar from '../components/AboutNavbar';
// import AboutVideo from '../components/AboutVideo';
// import Footer from '../components/Footer';
// import OurClient from '../components/OurClients';
// import Industries from '../components/Industries';
// import BusinessAchievements from '../components/ProjectCounter';
// import Card from '../components/HomeBlog';
// import Founder from '../components/Founder';
// import Testimonials from '../components/Testimonial';
// import UpcomingEvents from '../components/UpcomingEvents';






// import HelpYou from '../components/HelpYou';
import vid1 from "/assets/images/homevid.mp4";
import TrendingInsights from '../components/TrendingInsights';
// import Industries from './Industries';
import AboutNavbar from '../components/AboutNavbar';
import AboutVideo from '../components/AboutVideo';
import Footer from '../components/Footer';
import BusinessAchievements from '../components/ProjectCounter';
import Card from '../components/Card';
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonial';
import HelpYou from "./HelpYou";
import OurClient from "../components/OurClient";
import UpcomingEvents from "../components/UpcomingEvents";
import Industries from "../components/IndustriesSecond";

export default function Home() {

    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-start justify-start">
            <AboutNavbar />
            <AboutVideo vid1={vid1} title={""} des={""} />
            <TrendingInsights />
            <OurClient />

            {/* Industries Component */}
            <Industries
                image="/assets/images/manufacturing.png"
                title="Our Industries"
                titletext='We deliver exceptional results through advanced technology and innovative solutions. Our expertise enables us to tackle complex challenges and meet client needs effectively.'
                order="flex-row"
                subtitle={[
                    "Manufacturing",
                    "Hometextile",
                    "Apparel"
                ]}
                icons={[
                    "/assets/images/industry4.png",
                    "/assets/images/industry5.png",
                    "/assets/images/industry6.png"
                ]}
                text={[
                    "Insights and strategies for the manufacturing sector.",
                    "Protect your data with top-notch cybersecurity practices.",
                    "Financial expertise for navigating today's complex markets."
                ]}
                link={[
                    "/industries/manufacturing",
                    "/industries/cybersecurity",
                    "/industries/finance"
                ]}
            />
            <Industries
                image="/assets/images/277.jpg"
                title="Capabilities"
                titletext='We deliver exceptional results through advanced technology and innovative solutions. Our expertise enables us to tackle complex challenges and meet client needs effectively.'
                order="flex-row-reverse"
                subtitle={[
                    "Advisory",
                    "Consulting",
                    "Solutions"
                ]}
                icons={[
                    "/assets/images/cap1.png",
                    "/assets/images/cap2.png",
                    "/assets/images/cap3.png"
                ]}
                text={[
                    "Insights and strategies for the manufacturing sector.",
                    "Protect your data with top-notch cybersecurity practices.",
                    "Financial expertise for navigating today's complex markets."
                ]}
                link={[
                    "/industries/manufacturing",
                    "/industries/cybersecurity",
                    "/industries/finance"
                ]}
            />

            {/* FlexBox Components */}
            <div className='w-full flex items-center justify-center'>
            <div className="p-6 flex flex-col w-full py-[15vh]  items-center justify-center">
                    <h2 className='width-full font-bold text-6xl text-center'>Upcoming Events</h2>
                    <p className='text-center text-gray-400 py-4 w-[40%]'>Join us for our upcoming events and be part of the innovation and excitement. Stay tuned for dates and details!.</p>
                    <div className='flex items-center justify-center'>
                    <div className="w-full grid py-[10vh] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <UpcomingEvents 
                         image="/assets/images/4.jpg"
                         title="Harnessing the Power of Social Media for Business Growth"
                         description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                         date="June 22, 2023"
                         comments="3"
                         readMoreLink="#"
                         />
                        <UpcomingEvents
                            image="/assets/images/5.jpg"
                            title="Harnessing the Power of Social Media for Business Growth"
                            description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                            date="June 22, 2023"
                            comments="3"
                            readMoreLink="#"
                        />
                        <UpcomingEvents
                            image="/assets/images/3.jpg"
                            title="Harnessing the Power of Social Media for Business Growth"
                            description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                            date="June 22, 2023"
                            comments="3"
                            readMoreLink="#"
                        />
                        </div>
                </div>
                </div>
                </div>
                <BusinessAchievements />
                <div className="p-6 flex flex-col w-full py-[15vh]  items-center justify-center">
                    <h2 className='width-full font-bold text-6xl text-center'>Latest Blogs & News</h2>
                    <p className='text-center text-gray-400 py-4 w-[40%]'>Explore the latest updates, trends, and news with our curated selection of insightful blogs and articles, keeping you informed daily.</p>
                    <div className="w-full grid py-[10vh] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        <Card
                            image="/assets/images/4.jpg"
                            title="Harnessing the Power of Social Media for Business Growth"
                            description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                            date="June 22, 2023"
                            comments="3"
                            readMoreLink="#"
                        />
                        <Card
                            image="/assets/images/5.jpg"
                            title="Harnessing the Power of Social Media for Business Growth"
                            description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                            date="June 22, 2023"
                            comments="3"
                            readMoreLink="#"
                        />
                        <Card
                            image="/assets/images/3.jpg"
                            title="Harnessing the Power of Social Media for Business Growth"
                            description="Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age..."
                            date="June 22, 2023"
                            comments="3"
                            readMoreLink="#"
                        />

                    </div>
                </div>
                {/* <div className="p-6 flex flex-col w-full pb-[15vh]  items-center justify-center">
                <h2 className='width-full font-bold text-6xl text-center'>Meet the Founder</h2>
                <p className='text-center text-gray-400 py-4 w-[40%]'>Meet Amit Mittal, the visionary founder of Madasky. With a passion for innovation and excellence,leads the company with a commitment to transforming ideas into impactful solutions. </p>
            </div> */}
                <Founder />
                <div className='w-full flex items-center justify-center'>
                    <div className="p-6 flex w-[90%] py-[15vh]  items-start justify-center">
                        <div className='w-[40%] flex flex-col items-start justify-start'>
                            <h2 className='width-full font-bold text-6xl text-left'>Words from Our Clients</h2>
                            <p className='text-left text-gray-400 py-4 w-[90%]'>Discover how we’ve made a difference through the voices of those who matter most—our clients. Here, you’ll find heartfelt testimonials and feedback that showcase our commitment to excellence and the positive impact we’ve had on their businesses. Their stories are a testament to the quality of our services and our dedication to client satisfaction.

                            </p>
                        </div>
                        <div className='w-[60%] flex flex-col items-end justify-end'>
                            <Testimonials />
                        </div>
                    </div>
                </div>
                <HelpYou />
                <Footer />
            </div>
            );
}
