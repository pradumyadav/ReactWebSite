export default function SeekingRole() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <div className="w-2/3 h-auto flex flex-col items-start justify-start gap-6">
                    <h2 className="text-6xl font-semibold font-baskervville">
                        Are You Looking for an Exciting Role that Will Challenge
                        and Inspire You?
                    </h2>
                    <p className="text-lg">
                        Careers &emsp;
                        <span className="text-blue-500">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </p>
                    <p className="text-lg">
                        Search Jobs &emsp;
                        <span className="text-blue-500">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <img
                    src="/assets/images/8.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                />
            </div>
        </div>
    );
}
