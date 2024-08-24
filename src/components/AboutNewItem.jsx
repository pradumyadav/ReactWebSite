import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AboutNewItem({ title, link ,img}) {
    return (
        <Link className="relative w-auto text-left after:hover:w-[70%] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:absolute after:bottom-0 after:left-0 h-full flex items-center justify-center text-[#919191] max-lg:text-xs" to={link}>
            <h3 className="font-light flex justify-center items-center gap-2 text-base text-black">
              <span className="text-primary mr-1"><img src={img} /></span>  {title}
            </h3>
        </Link>
    );
}

AboutNewItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

AboutNewItem.defaultProps = {
    title: '',
    link: '',
}