import { Link } from 'react-router-dom';
import RightArrow from './RightArrow';
import PropTypes from 'prop-types';

export default function FourGridItem({ title, description, link, linkText }) {
    return (
        <div className="w-full h-full flex flex-col gap-4 items-start justify-start hover:shadow-xl transition-all p-5 cursor-pointer rounded-xl">
            <h2 className="text-2xl font-semibold text-left">{title}</h2>
            <p className="text-sm text-left">{description}</p>
            <Link to={link} className="flex gap-4 text-blue-700 underline underline-offset-4">
                {linkText} <RightArrow color="#00548F" />
            </Link>
        </div>
    );
}

FourGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};
