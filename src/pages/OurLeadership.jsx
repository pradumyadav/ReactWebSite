import { FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import Footer from '../components/Footer';
import AboutNavbar from '../components/AboutNavbar';
import FourGridItem from '../components/FourGridItem';
import InfoCard from '../components/InfoCard';
import Card from '../components/Card';

export default function OurLeadership() {
    const imageArr = [
        '/assets/images/20.jpg',
        '/assets/images/21.jpg',
        '/assets/images/22.jpg',
        '/assets/images/23.jpg',
        '/assets/images/24.jpg',
        '/assets/images/25.jpg',
        '/assets/images/27.jpg',
        '/assets/images/28.jpg',
        '/assets/images/29.jpg',
        '/assets/images/30.jpg',
        '/assets/images/31.jpg',
        '/assets/images/32.jpg',
        '/assets/images/33.jpg',
        '/assets/images/34.jpg',
        '/assets/images/35.jpg',
        '/assets/images/36.jpg',
        '/assets/images/37.jpg',
        '/assets/images/38.jpg',
        '/assets/images/39.jpg',
        '/assets/images/40.jpg',
        '/assets/images/41.jpg',
    ];
    return (
        <>
            <AboutNavbar />
            <div className="flex flex-col items-center">
                <div className="w-4/5 max-w-5xl text-center p-5">
                    <p className="text-5xl font-serif font-semibold text-black mb-2">
                        Our Leadership
                    </p>
                  

                    {/* <div>
                        <img src="/assets/images/343.png" alt="Leader 1" className='w-full '/>
                    </div> */}
                    {/* <p className="text-base leading-6 mb-7">
                        Madasky is led globally by our managing partner; our
                        elected board of directors, known as the Shareholders
                        Council; our global leadership team, known as the
                        Enablement Team; and the leaders of our offices and
                        practices.
                    </p> */}
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
                        "Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.",
                        'During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively increase market share, build an international sourcing network, and resolve complex operations and supply chain issues.',
                        "Amit is an alumnus of the TRIUM Global Executive MBA – an alliance of the world’s top 3 universities – New York University – Stern School of Business, London School of Economics and Political Science, and HEC Paris; the program which has greatly strengthened his leadership, business strategy, corporate finance, and valuation, product positioning, branding, and marketing skills.",
                        "Amit is a Commerce Graduate, Diploma in Garment Technology, a Certified Textile Technologist, a Certified Business Coach, a Certified Executive Coach for Top Executives, and a Certified Global Supply Chain and Business Process Improvement Expert. NIFT Adjunct Professor, Speaker at Various Business Schools and Jury Member of B’ft & M’ft Programs at NIFT Ahmedabad & Mumbai."
                    ]}
                />
                {/* <InfoCard
                    title="Our Inspiration"
                    subtitle=""
                    order="flex-row-reverse items-center"
                    image="/assets/images/98.jpg"
                    description={[
                        'Accelerating Sustainable and Inclusive Growth',
                        'Accelerating Sustainable and Inclusive Growth We’ve always been big believers in the growth potential of our clients. Today, we’re privileged to work with organizations that are on a new growth journey, one that pursues sustainability, inclusion, and economic growth, all at the same time.',
                    ]}
                /> */}
                {/* <div className="w-5/6 grid grid-cols-4 gap-6 pb-10">
                    <Card
                        title="Our Leadership"
                        image="/assets/images/47.jpg"
                        description={
                            'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                        }
                        link={'/about'}
                        linkText={'See Members'}
                    />
                    <Card
                        title="Our Leadership"
                        image="/assets/images/47.jpg"
                        description={
                            'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                        }
                        link={'/about'}
                        linkText={'See Members'}
                    />
                    <Card
                        title="Our Leadership"
                        image="/assets/images/47.jpg"
                        description={
                            'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                        }
                        link={'/about'}
                        linkText={'See Members'}
                    />
                    <Card
                        title="Our Leadership"
                        image="/assets/images/47.jpg"
                        description={
                            'Amit has over 26 years of business & professional experience in go-to-market strategies, business growth, performance improvement, international supply chain and product sourcing, and operations excellence roles with international retail, brand, and manufacturing-centric businesses.During these years, Amit has developed a passion for and played an important role in defining key business strategies to help companies aggressively.'
                        }
                        link={'/about'}
                        linkText={'See Members'}
                    />
                </div> */}
            </div>
            <Footer />
        </>
    );
}
