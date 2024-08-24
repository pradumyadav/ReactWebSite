import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navitem({ title, path }) {
    return (
        <Link
            className="text-white border-none rounded-2xl px-5 h-[50%] bg-[#e63410] border-2 flex items-center justify-center "
            to={path}
        >
            {title}
        </Link>
    );
}

Navitem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
