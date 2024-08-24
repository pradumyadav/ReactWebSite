// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default function FooterItem({ title, link }) {
//     return (
//         <Link
//             to={link}
//             className="text-slate-950 text-base hover:after:w-full after:w-0 after:h-0.5 after:absolute relative after:bottom-0 after:left-0 after:transition-all after:duration-300 after:bg-slate-900"
//         >
//             {title}
//         </Link>
//     );
// }

// FooterItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string,
// };


export default function FooterItem({ title, link }) {
    return (
        <a href={link} className="hover:text-gray-300 flex text-gray-600 text-lg items-center">
            <span className="text-gray-400 mr-1">▶</span> {title}
        </a>
    );
}