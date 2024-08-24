import CustomButton from './CustomButton';
import img from '/assets/images/272.png';

export default function Capabilities() {
    return (
        <div className="w-full bg-custom-gradient h-[90vh] flex items-center justify-center relative">
            {/* <Navbar customStyles="absolute top-0 z-50" /> */}
            <div className="w-1/2 h-full flex flex-col items-start justify-center text-white p-20 gap-6">
                <h2 className="text-3xl uppercase font-bold">
                Advisory Services by Amit Mittal
                </h2>
                <p className="font-semibold">
                Empowering Businesses with Global Expertise and Strategic Insights
                </p>
                <CustomButton
                    title="Contact Us ..."
                    customStyles="text-blue-500 bg-white"
                />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <img
                    className="w-auto h-[80%]"
                    src="/assets/images/1.png"
                    alt=""
                />
            </div>
        </div>
    );
}
