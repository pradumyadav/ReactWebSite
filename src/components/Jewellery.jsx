import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IndustriesLi from './IndustriesLi';

export default function Jewellery({ details1, industries = [] }) {
    return (
        <>
            <div className="font-sans max-w-7xl border-b-2 border-gray-200 mx-auto p-10 bg-white">
                <div className="h-[70vh] flex p-10 mb-10 items-center shadow-2xl">
                    <img
                        src={details1.img}
                        alt="Sustainable growth lightbulb"
                        className="w-[100%] h-[100%] object-cover rounded-lg max-w-md"
                    />

                    <div className="w-[55%] pl-14 text-4xl font-bold mb-6">
                        <h2 className="mb-5 text-gray-800 text-5xl leading-tight">
                            {details1.title}
                        </h2>
                        {industries && industries.length > 0 && (
                            <ol className="pl-5">
                                <IndustriesLi industries={industries} />
                            </ol>
                        )}
                        {/* <Link
                            href="#"
                            className="text-blue-600 no-underline text-xl gap-2 font-serif flex hover:gap-6 transition-all duration-300 ease-in"
                        >
                            Explore More<span>→</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}

Jewellery.propTypes = {
    details1: PropTypes.object.isRequired,
    industries: PropTypes.arrayOf(PropTypes.string),
};