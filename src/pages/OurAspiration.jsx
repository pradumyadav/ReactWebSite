
import Footer from '../components/Footer';
import AboutNavbar from '../components/AboutNavbar';
import AspirationItem from '../components/AspirationItem';
import AspirationInsights from '../components/AspirationInsights';

export default function OurAspiration() {
    const helpItems = [
        {
            type: 'Report - MGI Research',
            title: 'From poverty to empowerment: Raising the bar for sustainable and inclusive growth',
            date: 'September 18, 2023',
            description:
                'What would it take to raise minimum living standards and get on a net-zero path in this decade? Our research explores twin ambitions for people and the planet.',
            image: 'img62',
        },
        {
            type: 'Blog Post',
            title: "Tearing the 'paper ceiling':Madasky supports effort driving upward mobility for millions of workers",
            date: 'September 23, 2022',
            description:
                "Bachelor's degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
            image: 'img52',
        },
        {
            type: 'Blog Post',
            title: "Madasky Health Institute unveils investment case for closing the women's health gap",
            date: 'January 30, 2024',
            description:
                "World Economic Forum and Madasky's landmark report, which found that women spend 25 percent more of their lives in poor health, helped launch the Global Alliance on Women's Health.",
            image: 'img53',
        },
        {
            type: 'Case Study',
            title: 'Xcel Energy: Driving towards net zero with the power of digital',
            date: 'June 20, 2023',
            description:
                "In this case study, we look at how Xcel Energy, one of North America's largest energy providers, is using data and AI to achieve net zero targets.",
            image: 'img54',
        },
    ];
    const opportunityItems = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: 'img63',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: 'img64',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: 'img65',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: 'img54',
            link: '#',
        },
    ];
    const healthItems = [
        {
            type: 'Article - Madasky Health Institute',
            title: 'Aging with purpose: Why meaningful engagement with society matters',
            image: 'img70',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'Madasky Health Institute unveils investment case for closing the women’s health gap',
            image: 'img53',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: '988: Three digits and the nationwide effort to help millions in crisis',
            image: 'img53',
            link: '#',
        },
        {
            type: 'Article - Madasky Health Institute',
            title: 'How to achieve great health for all? Start in your city.',
            image: 'img53',
            link: '#',
        },
    ];

    const partnerItems = [
        {
            type: 'Case Study',
            title: 'How a manufacturing moonshot was made',
            image: 'img47',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'An AI power play: Fueling the next wave of innovation in the energy sector',
            image: 'img47',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Undaunted by global disruption, a logistics company embraces bold transformation',
            image: 'img47',
            link: '#',
        },
        {
            type: 'Article - Madasky Health Institute',
            title: 'How to achieve great health for all? Start in your city.',
            image: 'img47',
            link: '#',
        },
    ];

    return (
        <>
            <AboutNavbar />
            <div className="relative">
                <img
                    className="w-full h-auto"
                    src="/assets/images/97.jpg"
                    alt="Aspiration"
                />
                <div className="absolute top-16 left-20 text-white text-5xl font-semibold w-1/3 capitalize">
                    The opportunity of our era
                </div>
            </div>

            <div className="flex justify-center bg-gray-100 py-12">
                <div className="w-5/6">
                    <h1 className="text-4xl font-semibold mb-8 border-b-2 border-gray-800 pb-4">
                        OUR ASPIRATION
                    </h1>
                    <p className="mb-6">
                        At Madasky Consulting, our aspiration is to be the gold
                        standard in business consulting and coaching, not just
                        in India but globally. We envision a future where
                        businesses of all sizes and industries turn to us as
                        their trusted partner in navigating the complexities of
                        growth and achieving sustained success.
                    </p>
                    <p className="mb-6">
                        We are partnered with ActionCOACH, the world&apos;s
                        largest{' '}
                        <strong>business coaching company, which was</strong>{' '}
                        established in 1993 and has been mentoring more than
                        18,000 businesses globally weekly. This includes one on
                        one <strong>business coaching</strong>, corporate
                        coaching companies,{' '}
                        <strong>
                            business coaching and mentoring for small businesses
                        </strong>
                        , business advisory services, and management consulting
                        for startups. The knowledge and systems developed over
                        that time have brought significant improvements to
                        hundreds of thousands of businesses around the world.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-0">
                        <AspirationItem
                            title={'Strategic Goals'}
                            order={'flex-row'}
                            items={{
                                'Global Leadership':
                                    'Position Madasky Consulting as a global leader in business consulting, recognized for our innovative solutions and exceptional service.',
                                'Sustainable Growth':
                                    'Drive sustainable growth for our clients by providing strategies that ensure long-term success and resilience in a dynamic market environment.',
                                'Operational Excellence':
                                    'Continuously refine our processes and methodologies to deliver unmatched efficiency and effectiveness in all our engagements.',
                            }}
                        />
                        <AspirationItem
                            title={'Innovative Approach'}
                            order={'flex-row-reverse'}
                            items={{
                                'Cutting-edge Techniques':
                                    "Leverage the latest industry trends and technological advancements to provide innovative solutions tailored to each client's unique needs.",
                                'Customized Solutions':
                                    'Develop bespoke strategies and solutions that address the specific challenges and opportunities faced by our clients.',
                                'Agile Methodologies':
                                    'Utilize agile and iterative approaches to deliver high-quality solutions that meet the evolving needs of our clients.',
                            }}
                        />
                        <AspirationItem
                            title={'Global Reach'}
                            order={'flex-row'}
                            items={{
                                'International Presence':
                                    'Expand our presence across major global markets, establishing a strong Gothicold in key regions.',
                                'Cross-cultural Competence':
                                    'Build a diverse team with deep cross-cultural understanding to better serve our international clientele.',
                                'Collaborative Networks':
                                    'Partner with cross-functional teams and build strong relationships with our clients and partners.',
                            }}
                        />
                        <AspirationItem
                            title={'Client Success'}
                            order={'flex-row-reverse'}
                            items={{
                                'Measurable Impact':
                                    'Deliver quantifiable results and tangible improvements for our clients, ensuring they achieve their business objectives.',
                                'Long-term Partnerships':
                                    'Build enduring relationships with our clients based on trust, transparency, and mutual success.',
                                'Comprehensive Support':
                                    'Provide comprehensive support and guidance to our clients throughout the entire journey.',
                            }}
                        />
                    </div>
                    <div className="text-center py-12 bg-gray-200">
                        <h2 className="text-4xl font-semibold mb-4">
                            Join Us on this Journey
                        </h2>
                        <p className="mb-8">
                            We are committed to making a positive impact on
                            businesses around the world. Together, we can
                            achieve extraordinary success.
                        </p>
                        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-12 flex-col items-center">
                {/* <AspirationInsights items={helpItems} title="Latest Insights" /> */}
              
                <AspirationInsights
                    items={healthItems}
                    title="Investing in health"
                />
              
            </div>

            <Footer />
        </>
    );
}
