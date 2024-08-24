import img from '/assets/images/148.png';

export default function Banner2() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-end"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-lg mr-10 flex flex-col gap-y-5">
                <h2 className="text-7xl font-bold text-right  text-black font-baskerville ">
                    Our open ecosystem of alliances and acquisitions
                </h2>
                <p className="text-lg  text-right p-2 rounded mt-4">
                    Bringing the best to our clients
                </p>
            </div>
        </div>
    );
}
