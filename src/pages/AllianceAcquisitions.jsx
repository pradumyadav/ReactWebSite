import SubHeading from '../components/SubHeading';
import Counting from '../components/Counting';
import LatestNews from '../components/LatestNews';
import SmallCarousel from '../components/SmallCarousel';
import imgcard1 from '/assets/images/115.jpg';
import imgcard2 from '/assets/images/117.jpg';
import imgcard3 from '/assets/images/109.jpg';
import imgcard4 from '/assets/images/111.jpg';
import MegaCards from '../components/MegaCards';
import img3 from '/assets/images/113.jpg';
import img4 from '/assets/images/124.jpg';
import StripeBanner from '../components/StripeBanner';
import img10 from '/assets/images/106.jpg';
import AboutNavbar from '../components/AboutNavbar';
import Banner2 from '../components/Banner2';

export default function AllianceAcquisitions() {
    const text =
        'To help our clients in a rapidly changing world, we must continuously innovate and extend our capabilities. From cloud and artificial intelligence, to sustainability, change acceleration and more, our open ecosystem allows us to serve as end-to-end impact partners for our clients.';

    const arr = [
        {
            title: 'Technology and applications',
            des: 'We help our clients capture the full value of their technology investments and equip them with tools that revolutionize their ways of working.',
        },
        {
            title: 'Technology and applications',
            des: 'We help our clients capture the full value of their technology investments and equip them with tools that revolutionize their ways of working.',
        },
        {
            title: 'Technology and applications',
            des: 'We help our clients capture the full value of their technology investments and equip them with tools that revolutionize their ways of working.',
        },
    ];

    return (
        <div>
            <AboutNavbar />
            <Banner2 />
            <SubHeading text={text} />
            <Counting />
            <div className="flex justify-center py-8">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/assets/images/115.jpg" className="md:w-1/2" />
                    <div className="p-4 md:p-8">
                        <p>
                            MaDasky partner Liz Ericson and senior partner Peter
                            Dahlstrom, global co-leaders of McKinsey&apos;s
                            ecosystem of alliances and acquisitions, discuss how
                            our global network of collaborators and acquired
                            companies enables us to accelerate and scale client
                            impact.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-8">
                <p className="text-xl font-bold py-4">
                    Our combined capabilities
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center w-11/12">
                    {arr.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 m-4 flex flex-col items-start gap-4"
                        >
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-base font-light leading-7">
                                {item.des}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <LatestNews
                    details1={{
                        title: 'We are proud to partner with our clients to reach their biggest opportunities and create positive, enduring change.',
                        img: '/assets/images/106.jpg',
                    }}
                />
            </div>

            <div className="font-bold bg-gray-100 flex flex-col items-center py-20">
                <div className="text-2xl font-serif">
                    Learn more about our ecosystem
                </div>
                <SmallCarousel />
            </div>

            <div className="font-bold bg-gray-100 flex flex-col items-center py-2">
                <SmallCarousel />
            </div>

            <div>
                <MegaCards
                    data={{
                        img: imgcard1,
                        title: 'Flexport’s CEO on dealing with canal slowdowns',
                        para: 'Ryan Petersen discusses mitigation strategies for logistics customers who are dealing with supply chain infrastructure disruptions, such as the slowdowns at the Panama and Suez Canals.',
                        order: 'row-reverse',
                    }}
                />
                <MegaCards
                    data={{
                        img: imgcard2,
                        title: 'Flexport’s CEO on dealing with canal slowdowns',
                        para: 'Ryan Petersen discusses mitigation strategies for logistics customers who are dealing with supply chain infrastructure disruptions, such as the slowdowns at the Panama and Suez Canals.',
                    }}
                />
                <MegaCards
                    data={{
                        img: imgcard3,
                        title: 'Flexport’s CEO on dealing with canal slowdowns',
                        para: 'Ryan Petersen discusses mitigation strategies for logistics customers who are dealing with supply chain infrastructure disruptions, such as the slowdowns at the Panama and Suez Canals.',
                    }}
                />
                <MegaCards
                    data={{
                        img: imgcard4,
                        title: 'Flexport’s CEO on dealing with canal slowdowns',
                        para: 'Ryan Petersen discusses mitigation strategies for logistics customers who are dealing with supply chain infrastructure disruptions, such as the slowdowns at the Panama and Suez Canals.',
                    }}
                />
            </div>

            <div className="text-center flex flex-col justify-center items-center py-8">
                <h2 className="font-bold text-lg mb-12">OUR PEOPLE</h2>
                <div className="flex justify-center gap-8 mb-12">
                    <div className="w-72 p-8 bg-white shadow-lg flex flex-col items-center">
                        <img
                            src={img3}
                            alt="Peter Dahlstrom"
                            className="w-36 h-36 rounded-full object-cover"
                        />
                        <h3 className="my-4">Peter Dahlstrom</h3>
                        <p className="text-base mb-4">Senior Partner, London</p>
                        <p className="text-sm text-gray-600">
                            Global Head of McKinsey&apos;s Alliances &
                            Acquisitions, and serving leading institutions,
                            predominantly in the telecommunications...
                        </p>
                    </div>
                    <div className="w-72 p-8 bg-white shadow-lg flex flex-col items-center">
                        <img
                            src={img4}
                            alt="Liz Ericson"
                            className="w-36 h-36 rounded-full object-cover"
                        />
                        <h3 className="my-4">Liz Ericson</h3>
                        <p className="text-base mb-4">Partner, London</p>
                        <p className="text-sm text-gray-600">
                            Serves consumer-facing organisations on digital
                            projects, including omnichannel strategy,
                            organisation, marketing, and product...
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-4/5">
                    <h2 className="text-2xl font-serif font-bold">
                        Connect with our collaborations team
                    </h2>
                    <button className="py-2 px-4 bg-white border border-blue-500 text-blue-500">
                        Contact Us
                    </button>
                </div>
            </div>

            <div>
                <StripeBanner />
            </div>

            <div className="max-w-screen-xl mx-auto p-8 font-sans">
                <h3 className="text-sm text-gray-600 mb-2">RELATED</h3>
                <div className="flex gap-4 items-start">
                    <div className="w-1/2">
                        <img
                            src={img10}
                            alt="Sparks from a light source"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-black mb-2">
                            Our Solutions{' '}
                            <span className="text-blue-500 text-3xl">
                                &#8250;
                            </span>
                        </h2>
                        <p className="text-base text-gray-800 leading-6">
                            Learn more about how McKinsey&apos;s proprietary
                            solutions help us deliver insight and impact faster
                            than ever.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
