import CustomButton from './CustomButton';

export default function Banner() {
    return (
        <div className="w-full bg-custom-gradient h-[90vh] flex items-center justify-center relative">
            {/* <Navbar customStyles="absolute top-0 z-50" /> */}
            <div className="w-1/2 h-full flex flex-col items-start justify-center text-white p-20 gap-6">
                <h2 className="text-3xl uppercase font-bold">
                    Together, we have what it takes
                </h2>
                <p className="font-semibold">
                    At, Madasky we don&apos;t just point the way—we help you get
                    where you need to go. From transforming your performance to
                    powering new growth, we turn your ambition into action.
                </p>
                <CustomButton
                    title="Learn More ..."
                    customStyles="text-blue-500 bg-white"
                />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <img
                    className="w-auto h-full"
                    src="/assets/images/279.png"
                    alt=""
                />
            </div>
        </div>
    );
}
