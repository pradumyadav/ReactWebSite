import { Link } from 'react-router-dom';
import RightArrow from './RightArrow';
import PropTypes from 'prop-types';

export default function Card({ title, description, link, linkText, image }) {
    return (
        <div className="w-full h-full rounded-2xl flex flex-col border-2 gap-1 overflow-hidden items-start justify-start hover:shadow-xl transition-all cursor-pointer">
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <div className="flex flex-col items-start justify-start gap-2 p-5">
                <h2 className="text-2xl font-semibold text-left">{title}</h2>
                <p className="text-sm text-left">{description}</p>
                <Link to={link} className="flex gap-4">
                    {linkText} <RightArrow color="#00548F" />
                </Link>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};
