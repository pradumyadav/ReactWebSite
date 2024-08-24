import PropTypes from 'prop-types';

export default function MegaCards({ data }) {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="flex justify-between  items-stretch w-full">
                <div className="w-1/2">
                    <img
                        src={data.img}
                        className="w-full h-full object-cover"
                        alt={data.title}
                    />
                </div>
                <div className="w-1/2 flex items-center p-8 bg-[#051c2c] justify-center">
                    <div className="flex flex-col items-start w-[70%]">
                        <p className="text-5xl font-semibold text-white leading-tight mb-4 font-['Times_New_Roman']">
                            {data.title}
                        </p>
                        <p className="text-sm text-white leading-relaxed mb-6 ">
                            {data.para}
                        </p>
                        <button className="bg-transparent text-blue-600 border-none p-0 text-base font-semibold cursor-pointer flex items-center">
                            Learn more
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

MegaCards.propTypes = {
    data: PropTypes.object,
};
