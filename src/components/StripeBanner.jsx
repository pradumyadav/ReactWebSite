import img1 from '/assets/images/145.jpg';

export default function StripeBanner() {
    return (
        <div className="bg-[#051c2c] text-white p-10">
            <div className="flex justify-between items-center max-w-5xl mx-auto">
                <div className="flex-1 pr-10">
                    <h1 className="text-3xl mb-5">
                        Creating value beyond the hype
                    </h1>
                    <p className="text-lg mb-5">
                        Let's deliver on the promise of technology from strategy
                        to scale.
                    </p>
                    <a href="#" className="text-[#4a90e2] font-bold">
                        Get started →
                    </a>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Technology concept"
                        className="w-[50%] h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
