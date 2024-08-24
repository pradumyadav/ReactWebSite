import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FlexBox({ image, title, text, link, order }) {
    return (
        <div
            className={`w-full h-[70vh] flex ${order} items-center justify-center bg-slate-50`}
        >
            <img
                src={image}
                alt={title}
                className="w-1/2 h-full object-cover"
            />
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="w-[80%] h-[70%] flex flex-col items-start justify-start gap-5">
                    <h2 className="text-6xl font-bold font-baskervville">
                        {title}
                    </h2>
                    <p className="font-normal text-base text-left">{text}</p>
                    <Link to={link} className="text-blue-500 font-semibold flex justify-center items-center gap-1 hover:gap-4 transition-all duration-300 ease-in">
                        Learn more&emsp;
                       <i className="fa-solid fa-arrow-right inline"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

FlexBox.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    order: PropTypes.string,
};
