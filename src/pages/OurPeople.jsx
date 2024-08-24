import { FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import Footer from '../components/Footer';
import AboutNavbar from '../components/AboutNavbar';
import FourGridItem from '../components/FourGridItem';
import InfoCard from '../components/InfoCard';
import Card from '../components/Card';
import vid1 from "/assets/images/344.mp4";
import AboutVideo from '../components/AboutVideo';

export default function OurPeople() {


    return (
        <>
            <AboutNavbar />
            <AboutVideo vid1={vid1} title={""} des={""}/>

            <div className="flex flex-col items-center">
                <div className="w-full  text-center p-5">
                    <p className="text-5xl font-serif font-semibold text-black mb-2">
                        Our Leadership
                    </p>
                   
                     <div className='w-full h-auto flex gap-5 text-start justify-between items-center p-5 mb-5'>
                        <div className='w-[40%]  p-5'>
                            <h2 className="text-3xl font-bold text-black mb-2">
                            Team
                            </h2>
                            <p className='text-start-5 text-xl text-gray-600 pb-1 text-justify mb-3'>
                            At Madasky Consulting, the foundation of our success lies in the unparalleled expertise and dedication of our people, along with the strategic strength of our associations. Our team serves as a beacon of excellence, driving us towards unmatched client service and fulfilling our mission to champion our people.
                           </p>
                          
                            <p className='text- start-5 text-xl text-gray-600 pb-3  text-justify'>
                            At Madasky Consulting, the foundation of our success lies in the unparalleled expertise and dedication of our people, along with the strategic strength of our associations. Our team serves as a beacon of excellence, driving us towards unmatched client service and fulfilling our mission to champion our people.
                           </p>
                         
                        </div>
                        <div className='w-[60%]'>

                        <img src="/assets/images/343.png"></img>
                        </div>
                    </div>

                  <div className='w-full h-auto flex  text-start justify-center items-start gap-16 p-5'>
                    <div className='w-[40%]'>
                    <h2 className="text-2xl font-semibold text-black mb-5">
                            Alliances
                            </h2>
                            <p className='text-[1.17rem] text-gray-600 text-justify pb-3'>
                            At Madasky Consulting, we leverage strategic partnerships with leading providers in Business Software, Manufacturing Execution Systems (MES), Product Lifecycle Management (PLM), Branding, Brand Positioning, and AI-based lead generation technology. These collaborations empower us to deliver cutting-edge solutions and unparalleled expertise, ensuring our clients stay ahead in a competitive landscape. Our alliances enable us to drive innovation, optimize operations, and enhance market presence, reinforcing our commitment to delivering transformative results and sustained success.

                           </p>
                           
                  
                    </div>
                    <div className='w-[40%]'>
                    <h2 className="text-2xl font-semibold text-black mb-5">
                           Our Experts- “ProXperts”

                            </h2>
                            <p className='text-xl text-gray-600 text-justify'>
                            Our ProXperts are industry-specific specialists who bring a wealth of experience and knowledge to our clients. Each expert has many years of expertise in their particular field, enabling them to provide invaluable insights and strategies tailored to our clients' unique needs. They collaborate closely with our team and clients,These collaborations empower us to deliver cutting-edge solutions and unparalleled expertise providing strategic  Our alliances enable us to drive innovation, guidance to address and resolve the most pressing challenges.


                           </p>
                    </div>
                  </div>
                    {/* <div className="flex justify-center gap-4">
                        <a
                            href="#"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white"
                        >
                            <RiTwitterXFill />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white"
                        >
                            <FaFacebookF />
                        </a>
                    </div> */}
                </div>
                {/* <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto p-5 w-4/5">
                        <FourGridItem
                            title={'About Amit Mittal'}
                            description={
                                'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses....'
                            }
                            link={'/about'}
                            linkText={'See About Amit Mittal'}
                        />
                        <FourGridItem
                            title="Enablement Team"
                            description={
                                'Our Enablement Team is a global leadership body that accelerates the delivery of our client service and people mission. The team connects leaders of regions and key capabilities, such as People & Diversity, Risk & Resilience, and Finance, to support our firm&apos;s performance and health.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                        <FourGridItem
                            title="Our Leadership"
                            description={
                                'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                        <FourGridItem
                            title={'Practice Leadership'}
                            description={
                                'Our practices serve clients across most capabilities and industries. The global leaders of each are responsible for delivering client impact, developing knowledge and capabilities, innovating, and developing our people. They work closely with regional leaders and many others to deliver positive, enduring change to our clients and stakeholders.'
                            }
                            link={'/about'}
                            linkText={'See Members'}
                        />
                    </div>
                </div> */}
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
                    title="Our Inspiration"
                    subtitle=""
                    order="flex-row-reverse items-center"
                    image="/assets/images/98.jpg"
                    description={[
                        'Accelerating Sustainable and Inclusive Growth',
                        'Accelerating Sustainable and Inclusive Growth We’ve always been big believers in the growth potential of our clients. Today, we’re privileged to work with organizations that are on a new growth journey, one that pursues sustainability, inclusion, and economic growth, all at the same time.',
                    ]}
                />
             
            </div>
            <Footer />
        </>
    );
}
