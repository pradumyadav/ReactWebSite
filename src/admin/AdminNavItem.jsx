import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AdminNavItem({
    title,
    path,
    active,
    icon
}) {
    return (
        <Link
            to={path}
            className={`w-full h-10 pl-3 font-semibold  ${active
                ? 'bg-primary text-white rounded-lg text-background'
                : 'text-primary'
                } flex items-center justify-start text-lg gap-3`}
        >
            <span>
                {icon}
            </span>
            <span className='font-poppins'>
                {title}
            </span>
        </Link>
    );
}

AdminNavItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node
};

AdminNavItem.defaultProps = {
    title: '',
    path: '',
    active: false,
    icon: null
};