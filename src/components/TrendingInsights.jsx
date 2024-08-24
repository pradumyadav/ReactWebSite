import TrendingInsightItem from './TrendingInsightItem';

export default function TrendingInsights() {
    return (
        <div className="w-full h-28 flex items-center justify-between px-10">
            <div className="w-1/6 h-full flex flex-col items-start justify-center">
                <h2 className="font-semibold text-3xl flex flex-col items-start justify-start">
                    <span>Trending</span>
                    <span>Insights</span>
                </h2>
            </div>
            <TrendingInsightItem
                title={1}
                text="What to read next: Madasky's 2024 annual book
                recommendations"
            />
            <TrendingInsightItem
                title={2}
                text="The economic potential of generative AI: The next productivity frontier"
            />
            <TrendingInsightItem
                title={3}
                text="A data leader’s technical guide to scaling gen AI"
            />
            <TrendingInsightItem
                title={4}
                text="A data leader’s technical guide to scaling gen AI"
            />
        </div>
    );
}
