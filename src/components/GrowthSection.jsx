export default function GrowthSection() {
    return (
        <div className="w-full h-96 flex items-center justify-center gap-10 px-20">
            <div className="w-1/2 h-full flex flex-col items-start justify-center">
                <iframe
                    src="/assets/images/Video-1.mp4"
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4">
                <h2 className="text-5xl font-semibold font-baskervville">
                    What Does It Mean to Accelerate Sustainable and Inclusive
                    Growth?
                </h2>
                <p className="text-lg">
                    Madasky experts from around the globe share their insights.
                    &emsp;
                    <span className="text-blue-500">
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </p>
                <p className="text-lg">
                Advocating for a new era of growth.
                &emsp;
                    <span className="text-blue-500">
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </p>
            </div>
        </div>
    );
}
