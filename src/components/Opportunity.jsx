import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Opportunity({ type, title, image, link }) {
    return (
        <div className="flex flex-col h-full shadow-lg  rounded-lg overflow-hidden">
            <img
                src={image}
                alt={type}  
                className="w-full h-48 rounded-t-lg object-cover hover:scale-110 transition-all duration-300 ease-in"
            />
            <div className="flex flex-col  p-[12px] flex-grow">
                <p className="text-sm text-gray-600 mb-2">{type}</p>
                <h3 className="text-lg font-semibold mb-2 hover:text-blue-800">{title}</h3>
                <Link
                    to={link}
                    className="text-blue-600 font-semibold flex items-center mt-auto gap-1 hover:underline g hover:gap-5 transition-all duration-300 ease-in"
                >
                    Learn more <ArrowRight className="ml-2 "  size={16} />
                </Link>
            </div>
        </div>
    );
}

Opportunity.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};