import AboutNavbar from '../components/AboutNavbar';
import AboutVideo from '../components/AboutVideo';
import DoubleCard from '../components/DoubleCard';
import Footer from '../components/Footer';
import FourGrid from '../components/FourGrid';
import HowWeWork from '../components/HowWeWork';
import InfoCard from '../components/InfoCard';
import OurInspiration from '../components/OurInspiration';
import SingleInfoCard from '../components/SingleInfoCard';
import vid1 from "/assets/images/video-1.mp4";
export default function About() {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-start justify-start">
            {/* <Navbar /> */}
            <AboutNavbar position="fixed" />
            <AboutVideo vid1={vid1} title={"ABOUT US"} des={"We accelerate sustainable and inclusive growth"}/>
            <div className="w-full h-auto p-20 flex flex-col items-start justify-start gap-6 bg-custom-gradient-2 text-white text-lg">
                <span>
                    Our clients are always pushing forward. Testing.
                    Challenging. Striving for the change that changes
                    everything.
                </span>
                <span>
                    We partner with bold leaders every step of the way.
                    Pinpointing the strategy that will reshape tomorrow.
                    Harnessing innovation to reach net zero. Transforming
                    through technology. Developing skills and capabilities
                    across their organization.
                </span>
                <span>
                    Together we’re accelerating toward a more sustainable,
                    inclusive, and growing future for all.
                </span>
            </div>
            <DoubleCard
                title={'OUR HISTORY'}
                order={'flex-row'}
                image="/assets/images/11.jpg"
                description={[
                    'In January 2013, a classroom at Stern Business School sparked a vision in Amit Mittal: to harness business as a force for broader industry impact. Starting with pro bono consulting for the home textile industry, Amit’s expertise quickly gained recognition, leading him to become a sought-after independent management consultant.',
                    'In 2018, he founded Madasky Consulting, aiming to extend his transformative services to both large corporations and MSMEs. His mission gained further momentum in 2020 through a partnership with ActionCOACH, where he became a Business and Executive Coach, committed to creating wealth for 20,000 businesses and 100,000 jobs.',
                    'Amit’s dedication was recognized globally in 2021 when he was appointed Senior Advisor to McKinsey & Company. By 2024, Madasky Consulting had evolved into a Private Limited Company with a presence in eight countries, continuing to drive innovation and excellence across the globe.',
                    'Amit’s journey from a classroom vision to a global consulting firm stands as a testament to the power of dedication and transformative impact.',
                ]}
            />
            <HowWeWork />
            <OurInspiration />
            <FourGrid />
            <InfoCard
                title="Amit Mittal"
                subtitle="Managing Director"
                order="flex-row items-center"
                image="/assets/images/80.jpg"
                description={[
                    "Amit has more than 25 years of experience in growing business and delivering consistent results. He is a business coach who has helped many businesses achieve their goals and accomplished tremendous growth in sales, marketing, team training, strategic planning, and much more. Amit has a result-driven approach and focuses on the development of the business and it's owner as well. He uses defined business strategies that boost business growth. As an accomplished business coach and proven track record for transforming business and lives,  Amit is all set to assist eager business owners to achieve their desired dreams and goals.",
                    'Amit served the family business before moving out and finding success in the business world. Amit is a proud husband and father of two amazing daughters. He is a business accelerator with critical business knowledge and tools from ActionCoach, and has an MBA from a top-ranked global business schools - NYU-Stern, LSE, and HEC Paris. Amit is on a mission to create wealth and grow 20,000 enterprises and touch 100,000 lives in the next 20 years.',
                ]}
            />
            <InfoCard
                title="MADASKY CONSULTING"
                order="flex-row-reverse items-center"
                image="/assets/images/81.png"
                description={[
                    "Madasky was established in the year 2013 by our managing partner Amit Mittal. Madasky initially started with a business consulting company serving mid to large businesses especially in the manufacturing sector to help them overcome various business and operations challenges. In the year 2020, Amit partnered with ActionCOACH, World's number 1 business coaching company. ActionCOACH has presence in 82 countries, its a close knit community of 1000 plus coaches and mentoring  more than 18000 businesses every week globally. ActionCOACH has served and transformed many businesses during this global pandemic; COVID-19 period. We continue to serve businesses who were looking for help to counter the unpredictable situation and uncertainty in their business. Madasky ActionCOACH is helping many businesses make a shift in their marketing and sales strategies to ensure business keeps generating revenue and growth.",
                ]}
            />
            <SingleInfoCard
                title="ActionCoach"
                order="flex-row items-center"
                image="/assets/images/82.jpg"
                description={[
                    'ActionCOACH is designed to give you long-term mentoring  with a practical approach. Not many companies have experience in training and coaching business owners that we have.',
                    'ActionCOACH has worked with business owners in group coaching sessions and one-on-one coaching programs for more than 25+ years. Our coaching programs are focused on exclusive business-building strategies that help you achieve business and personal goals.',
                ]}
            />
            <Footer />
        </div>
    );
}
