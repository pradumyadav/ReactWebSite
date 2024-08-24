import BulletSection from './BulletSection';
import DoubleCard from './DoubleCard';

export default function OurInspiration() {
    return (
        <DoubleCard
            title={'OUR ASPIRATION'}
            order={'flex-row'}
            height="130vh"
            image="/assets/images/13.jpg"
            description={[
                'At Madasky Consulting, our aspiration is to be the gold standard in business consulting and coaching, not just in India but globally. We envision a future where businesses of all sizes and industries turn to us as their trusted partner in navigating the complexities of growth and achieving sustained success.',
                'We are partnered with ActionCOACH, the world’s largest business coaching company, which was established in 1993 and has been mentoring more than 18,000 businesses globally weekly. This includes one on one business coaching, corporate coaching companies, business coaching and mentoring for small businesses, business advisory services, and management consulting for startups. The knowledge and systems developed over that time have brought significant improvements to hundreds of thousands of businesses around the world.',
            ]}
            additionalFields={
                <>
                    <BulletSection
                        title={'Strategic Goals'}
                        description={[
                            'Global Leadership: Position Madasky Consulting as a global leader in business consulting, recognized for our innovative solutions and exceptional service.',
                            'Sustainable Growth: Drive sustainable growth for our clients by providing strategies that ensure long-term success and resilience in a dynamic market environment.',
                            'Operational Excellence: Continuously refine our processes and methodologies to deliver unmatched efficiency and effectiveness in all our engagements.',
                        ]}
                    />
                    <BulletSection
                        title={'Client Success'}
                        description={[
                            'Tailored Solutions: Offering customized solutions that address the unique challenges and opportunities of each client, ensuring their specific goals are met.',
                            'Measurable Impact: Delivering tangible results that contribute to our clients bottom line, enhancing their competitive edge and market position.',
                            'Long-Term Partnerships: Building lasting relationships with our clients, grounded in trust, transparency, and a deep understanding of their business needs.',
                        ]}
                    />
                    <BulletSection
                        title={'Talent Development'}
                        description={[
                            'Tailored Solutions: Offering customized solutions that address the unique challenges and opportunities of each client, ensuring their specific goals are met.',
                            'Measurable Impact: Delivering tangible results that contribute to our clients bottom line, enhancing their competitive edge and market position.',
                            'Long-Term Partnerships: Building lasting relationships with our clients, grounded in trust, transparency, and a deep understanding of their business needs.',
                        ]}
                    />
                </>
            }
        />
    );
}
